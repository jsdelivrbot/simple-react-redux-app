import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    constructor(props) {
        super(props);
    }

    renderList() {
        return this.props.books.map(book => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// Provides this container class with props representing the required data from the application's
// state, in this case, the array of books from the books_reducer
function mapStateToProps(state) {
    // Whatever is returned from here will show up as props inside BookList
    return {
        books: state.books
    };
}


// Anything returned from this function will end up as props on the BookList container, 
// just like mapStateToProps does for the state
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called the result should be passed to all our reducers via the dispatch function
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);