import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';

import Layout from '../Layout';

import Products from './Products';


class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { idCategory } = queryString.parse(this.props.location.search)
    return (
      <Layout>
        <Products
          idCategory={idCategory || null}
        />
      </Layout>
    );
  }
}

Home.propType = {
}

function mapStateToProps(state) {
  const {
    auth,
  } = state;
  return {
    auth,
  };
}

export default connect(mapStateToProps, {
})(Home);
