import React, { Component } from 'react';

class Book extends Component {
    render() {
        return (
            <div>
                <p>ISBN: {this.props.book.isbn}</p>
                <p>Title: {this.props.book.title}</p>
                <p>Subtitle: {this.props.book.subtitle}</p>
                <p>Author: {this.props.book.author}</p>
                <p>Published: {this.props.book.published}</p>
                <p>Publisher: {this.props.book.publisher}</p>
                <p>Pages: {this.props.book.pages}</p>
                <p>Description: {this.props.book.description}</p>
                <p>Website: {this.props.book.website}</p>
            </div>
        );
    }
}

export default Book;
