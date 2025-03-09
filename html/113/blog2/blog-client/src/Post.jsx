import React from 'react'
import Comments from './Comments';

export default function Post(props) {
  const { title, author, date, body } = props.post;

  return (
    <div className="post">
      <h2>{title}</h2>
      <h3>by {author} on {new Date(date).toLocaleString()}</h3>
      <p>{body}</p>
      <hr></hr> 
      <p>comments</p>

      <a href="comments">add comments</a>
    </div>
  )
}
