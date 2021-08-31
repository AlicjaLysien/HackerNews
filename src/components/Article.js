import { React, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

const Article = props => {

    const [user, setUser] = useState([{
        karma: '',
        id: '',
    }])

    useEffect(() => {
        userData(props.by)
    }, [])

    function userData(by) {
        console.log('https://hacker-news.firebaseio.com/v0/user/' + by + '.json');
        fetch('https://hacker-news.firebaseio.com/v0/user/' + by + '.json')
            .then(response => response.json())
            .then(data => {
                setUser({ ...user, karma: data.karma, id: data.id })
            })
    }

    return (
        <>
            <div
                id={props.id}
                className="article"
            >
                <div className="article-bg"
                    style={{ backgroundImage: `url("https://picsum.photos/id/${Math.floor(Math.random() * 60)}/700/400")` }}
                >
                    <span className="score">score: {props.score}</span>

                </div>
                <span className="author">
                    <FontAwesomeIcon icon={faUserEdit} />
                    {user.id} (karma: {user.karma})<br />
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    {new Date(props.time * 1000).toLocaleDateString('en-US')}&nbsp;
                    {new Date(props.time * 1000).toLocaleTimeString('en-US')}
                </span>
                <h2>{props.title}</h2>
                {props.url && <span className="url">Read more on: {props.url}</span>}
            </div>
        </>
    )
}

export default Article;
