import React, { Component } from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <form action="" className="input-group">
                <input className="form-control" type="text"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
            </form>
        )
    }
};