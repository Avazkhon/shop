import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import ListProducts from './ListProducts';

const Products = ({
  products
}) => (
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

Products.propType = {
  products: PropTypes.shape({}),
}

export default Products;
