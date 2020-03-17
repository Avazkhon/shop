import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

// import {s

import ListProducts from './ListProducts';

class Products extends React.Component {
  constructor(props) {
    super(props);

  }

  // componentDidMount() {
  //   const { getProducts, getProductsByIdCategory, idCategory } = this.props;
  //   if (idCategory) {
  //     getProductsByIdCategory(idCategory)
  //   } else {
  //     getProducts();
  //   }
  // }

  render() {
    const {
      products,
    } = this.props;
    return (
      <Container>
        <Row>
          <Col>
            <ListProducts
              products={products && products.products}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

Products.propType = {
  // products: PropTypes.shape({}),
  auth: PropTypes.shape({}),

  // getProducts: PropTypes.func,
  // getProductsByIdCategory: PropTypes.func,
}

function mapStateToProps(state) {
  const {
    auth,
    // products,
  } = state;
  return {
    auth,
    // products,
  };
}

export default connect(mapStateToProps, {
  // getProducts,
  // getProductsByIdCategory,
})(Products);
