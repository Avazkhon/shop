import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import Message from 'widgets/Message';
import ListProducts from './ListProducts';

const Products = ({
  products
}) => (
  <Container>
    <Message
      fail={products.error}
      message={
        !products.isFetching
        && products.products && !products.products.length &&
        'Пока тут пусто!'
      }
      isFetch={products.isFetching}
    />
    <Row>
      {
        products && products.products &&
        <Col>
          <ListProducts
            products={products && products.products}
          />
        </Col>
      }
    </Row>
  </Container>
);

Products.propType = {
  products: PropTypes.shape({}),
}

export default Products;
