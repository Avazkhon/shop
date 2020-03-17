import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import queryString from 'query-string';

import {
  getProducts,
  getProductsByIdCategory,
} from 'actions';

import Layout from '../Layout';

import Products from './Products';


class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    const {store} = ctx;
    const { idCategory } = req.query;
    if (store && store.dispatch) {
      if (idCategory) {
        await store.dispatch(getProductsByIdCategory(idCategory));
      } else {
        await store.dispatch(getProducts());
      }
    }
  }

  componentDidMount() {
    const { getProducts, getProductsByIdCategory, location } = this.props;
    const { idCategory } = queryString.parse(location.search)
    if (idCategory) {
      getProductsByIdCategory(idCategory)
    } else {
      getProducts();
    }
  }

  render() {
    const { products } = this.props;
    return (
      <Layout>
        <Products
          products={products}
          // idCategory={idCategory || null}
        />
      </Layout>
    );
  }
}

Home.propType = {
  products: PropTypes.shape({}),
  auth: PropTypes.shape({}),

  getProducts: PropTypes.func,
  getProductsByIdCategory: PropTypes.func,
}

function mapStateToProps(state) {
  const {
    auth,
    products,
  } = state;
  return {
    auth,
    products,
  };
}

export default connect(mapStateToProps, {
  getProducts,
  getProductsByIdCategory,
})(Home);
