import { React, useState, useEffect } from 'react'
import Article from './Article';

const News = props => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        topStoriesData()
    }, [])

    function topStoriesData() {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < 10; i++) {
                    var randomStory = Math.floor(Math.random() * data.length);
                    fetch('https://hacker-news.firebaseio.com/v0/item/' + data[randomStory] + '.json')
                        .then(response => response.json())
                        .then(item => {
                            setArticles(articles => [...articles, item])
                        })
                }
            })
    }

    function sortData(articles) {
        return articles.sort(function (a, b) {
            var A = a.score
            var B = b.score
            if (A > B) {
                return -1;
            }
            if (A < B) {
                return 1;
            }
            return 0;
        })
    }

    return (
        <div className="news">
            {
                sortData(articles).map(article => {
                    return (
                        <Article
                            key={article.id}
                            title={article.title}
                            time={article.time}
                            by={article.by}
                            url={article.url}
                            score={article.score}
                        />)
                })
            }


        </div>
    )
}

export default News;
