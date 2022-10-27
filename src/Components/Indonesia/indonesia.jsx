import React, { useState, useEffect} from 'react'
import {Card, Button} from 'antd'
import axios from 'axios'
import Navbarscomp from '../Navbar/Index'
import './indonesia.css'

const {Meta} = Card

function Indonesia() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
      const getArticles = async () => {
          const response = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=aeea121fbf5b47d1a7a5cfa2f00e25d7')
          console.log(response)
          setArticles(response.data.articles)
      }
      getArticles()
  }, [])

  console.log("articles", articles)
  return (
    <div className='news-app'>
      <Navbarscomp />
            <div className='news-item'>
                {articles && articles.map((article, index) => {
                    return (
                        <Card
                        key={index}
                        hoverable
                            cover={<img className='news-img' src={article.urlToImage} alt={article.urlToImage}/>}
                        >
                            <Meta title={article.title} description={article.description} />
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                <Button type="primary">News Page</Button>
                            </a>
                        </Card>
                    )
                })}
            </div>
        </div>

  )
}

export default Indonesia