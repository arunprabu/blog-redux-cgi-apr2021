import React, { Component } from 'react';
// Step 10: Let's connect with react comp with redux -- Refer the last line for same step 
import {connect} from 'react-redux';
import { createPost } from '../services/postService';


class PostForm extends Component {

  // Step 9: to dispatch action, let's write form submit logic in PostForm.js
  // form code can be  the following with ref's and submission logic  
  // Note: Learn about forms with ref's and inputs with value 
  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    console.log(this.getTitle.value);
    console.log(this.getContent.value);

    const data = {
      title: this.getTitle.value,
      body: this.getContent.value
    }
    console.log(data);

    // Step 11:  It is time to dispatch actions from form submission logic 
    // connect() helps props have dispatch method
    // using it we can dispatch action with type and data (payload)
    // so, inside the handleSubmit logic, have a console.log(this.props);
    console.log(this.props); // you will find dispatch method here

    // Step 13: dispatch the action to createPost with the form data
    this.props.dispatch( createPost(data) );
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h3>Create Post!</h3>
            <form className='text-left' onSubmit={this.handleSubmit}>
              <input required type="text"
                placeholder="Enter Post Title"
                className='form-control'
                defaultValue="article 1"
                ref={(input) => this.getTitle = input} /><br />
              <textarea required rows="5" cols="28"
                placeholder="Enter Post"
                className='form-control'
                defaultValue="content 1"
                ref={(input) => this.getContent = input} /><br />
              <button className='btn btn-primary' type='submit'>Add Post</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

// Step 10.1
//last line of the compoent should be the following. 
// after connecting props will be available in this component. 
// props will have a way to dispatch an action
export default connect()(PostForm);