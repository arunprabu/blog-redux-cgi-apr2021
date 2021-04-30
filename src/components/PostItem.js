// fn comp -- will receive props 
import React from 'react'
import { Link } from 'react-router-dom';

const PostItem = (props) => {
  return (
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">
          <Link to={`/posts/${props.id}`}>{props.title}</Link>
        </h5>
        <small>Post Id: {props.id}</small>
      </div>
      <p className="mb-1">
        {props.body}
      </p>
    </div>
  )
}

export default PostItem;