import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import axios from 'axios';
import '../../App.css';

function Covid19() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=covid19&apiKey=aeea121fbf5b47d1a7a5cfa2f00e25d7'
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
                <Button className="btn btn-info me-1">
                  <span>News page</span>
                </Button>
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

export default Covid19;
