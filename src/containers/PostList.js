import React, { Component } from 'react';
// Step 16.1
import { connect } from 'react-redux';
import { getAllPosts } from '../services/postService';
import PostItem from '../components/PostItem';

class PostList extends Component {

  componentDidMount(){
    console.log('After rendering compDidMount will be called');
    this.props.dispatch(getAllPosts());
  }

  render() {

    console.log(this.props);
    
    // Step 17: Let's loop thru the posts data from props
    let posts = null;
    if(this.props.posts && this.props.posts.length > 0){
      posts = this.props.posts.map( (post, index) => {
        return(
          <PostItem 
            id={post.id} 
            title={post.title}
            body={post.body} 
            key={index}/>
        );
      });
    }

    return (
      <div className='container'>
        <h3>Post List</h3>
        <div className="list-group text-left">
          
          { this.props.posts && this.props.posts.length > 0? 
            posts:
            <div className="alert alert-warning">
              No Posts Found! You can add one!
            </div>
          }
        </div>
      </div> 
    )
  }
}

/* 16.2 to get the state and to convert that to props have the following fn
in the PostList.js file, make the following change in the export. */

const mapStateToProps = (state) => { // take in state from store
  console.log(state);
  return {
    posts: state.posts
  }
} 
/* 
 The above function will convert state to props for the PostList compoent.
  By doing the above this comp will no longer have state. 
*/

export default connect(mapStateToProps)(PostList);

