import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
    render () {
        return (
            <form>
                <h3>Create a New Post</h3>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="categories">Categories</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">content</label>
                    <textarea className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content']
})(PostsNew);