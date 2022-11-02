import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import axios from 'axios';
import Navbarscomp from './Navbar/Index';
import '../App.css';

const { Meta } = Card;

function Indonesia() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=id&apiKey=aeea121fbf5b47d1a7a5cfa2f00e25d7'
      );
      console.log(response);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);

  console.log('articles', articles);
  return (
    <div className="news">
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
                <a href={article.url} target="_blank" rel="noopener noreferrer">
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
  );
}

export default Indonesia;
