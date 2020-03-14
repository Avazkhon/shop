import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Layout from '../Layout';

class CreateProduct extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {
      auth,
    } = this.props;
    return (
      <Layout>
      {
        !auth.auth && null
      }
      {
        auth.auth && 'CreateProduct'
      }
      </Layout>
    );
  }
}

CreateProduct.propType = {
  auth: PropTypes.shape(),
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
})(CreateProduct);
