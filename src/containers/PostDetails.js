import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostById } from '../services/postService';

class PostDetails extends Component {

  componentDidMount(){
    // Step 22.1 read url parameter in react -- it is available in props
    console.log(this.props.match.params.id);
    // Step 22.2 passing the url param to getPostById() method
    this.props.dispatch(getPostById(this.props.match.params.id)); 
  }

  render() {
    console.log(this.props.post);

    let post = this.props.post;
    return (
      <div className='container'>
        <h1>Post Details</h1>
        <div className='text-left'>
          <div className="list-group">
            <div className="list-group-item">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{post.title}</h5>
                <small>Post Id: {post.id}</small>
              </div>
              <p className="mb-1">
                {post.body}
              </p>
              <small>UserId: {post.userId}</small>
              <br />
              <button className='btn btn-primary' data-toggle='modal'
                data-target='#editModal'>Edit</button> &nbsp;
                  <button className='btn btn-danger'>Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // it is from state.posts 
  // not from state.post because of the way it is mentioned in combined reducer
  return {
    post: state.posts 
  }
}

export default connect(mapStateToProps)(PostDetails);