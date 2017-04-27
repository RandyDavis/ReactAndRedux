import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

// Updated to now be a component class
class PostsIndex extends Component {
    // add lifecycle hook componentWillMount() to fetch data when our component
    // is about to mount, e.g., displaying a list of posts when a page loads or sans
    // click event
    componentWillMount() {
        this.props.fetchPosts();
    }

    render () {
        return (
            <div>List of blog posts</div>
        )
    }
}

export default connect(null, { fetchPosts })(PostsIndex);
