import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBooksQuery = gql`
{
    	books(limit: 5) {
    		title
    	}
}
`;

class BookList extends Component {
  render() {
    const showBooks = () => {
      if (this.props.data.books) {
        return (this.props.data.books.map((b, i) => {
          return <li key={i}>{b.title}</li>;
        }))
      }
    }
    return (<ul>
      {showBooks()}
    </ul>)
  };
}

export default graphql(getBooksQuery)(BookList);