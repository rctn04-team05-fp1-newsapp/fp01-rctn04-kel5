import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import axios from 'axios';
import Navbarscomp from './Navbar/Index';
import '../App.css';

function Indonesia() {
  const [articles, setArticles] = useState([]);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=programming&apiKey=aeea121fbf5b47d1a7a5cfa2f00e25d7'
      );
      console.log(response);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  console.log('articles', articles);

  useEffect(() => {
    setOutput([]);
    articles.filter((val) => {
      if (val.title.toLowerCase().includes(input.toLowerCase())) {
        setOutput((output) => [...output, val]);
      }
    });
  }, [input]);

  return (
    <>
      <div>
        <div className="header position-relative m-4">
          <h1 className="pt-4 position-absolute top-0 start-50 translate-middle ">
            Programming News
          </h1>
        </div>
        <div className="search-bar position-absolute top-0 end-0 pe-2">
          <input
            className="form-control my-2"
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="search"
          ></input>
        </div>
      </div>

      <div className="news">
        {output &&
          output.map((article, index) => {
            return (
              <Card key={index}>
                <h3 className="news__title">{article.title}</h3>
                <p className="news__desc">{article.description}</p>
                <span className="news__author">{article.author}</span> <br />
                <span className="news__published">{article.publishedAt}</span>
                <span className="news__source">{article.source.name}</span>
                <div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn btn-info me-1">News Page</Button>
                  </a>
                  <Button className="btn btn-primary">
                    <span>Save</span>
                  </Button>
                </div>
              </Card>
            );
          })}

        {articles &&
          articles.map((article, index) => {
            return (
              <Card key={index}>
                <h3 className="news__title">{article.title}</h3>
                <p className="news__desc">{article.description}</p>
                <span className="news__author">{article.author}</span> <br />
                <span className="news__published">{article.publishedAt}</span>
                <span className="news__source">{article.source.name}</span>
                <div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn btn-info me-1">News Page</Button>
                  </a>
                  <Button className="btn btn-primary">
                    <span>Save</span>
                  </Button>
                </div>
              </Card>
            );
          })}
      </div>
    </>
  );
}

export default Indonesia;
