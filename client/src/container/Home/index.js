import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../Layout';

import Products from './Products';


class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Layout>
        <Products />
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
