import { React, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserEdit, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import img01  from '../img/01.jpg'
import img02 from '../img/02.jpg'
import img03 from '../img/03.jpg'
import img04 from '../img/04.jpg'
import img05 from '../img/05.jpg'
import img06 from '../img/06.jpg'
import img07 from '../img/07.jpg'
import img08 from '../img/08.jpg'
import img09 from '../img/09.jpg'
import img10 from '../img/10.jpg'
import img11 from '../img/11.jpg'
import img12 from '../img/12.jpg'
import img13 from '../img/13.jpg'
import img14 from '../img/14.jpg'
import img15 from '../img/15.jpg'
import img16 from '../img/16.jpg'
import img17 from '../img/17.jpg'
import img18 from '../img/18.jpg'
import img19 from '../img/19.jpg'
import img20 from '../img/20.jpg'
import img21 from '../img/21.jpg'
import img22 from '../img/22.jpg'
import img23 from '../img/23.jpg'
import img24 from '../img/24.jpg'
import img25 from '../img/25.jpg'

const images  = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10,
     img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
     img21, img22, img23, img24, img25];

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
                    style={{ backgroundImage:  'url(' + images[Math.floor(Math.random() * 25)] + ')'}}
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
