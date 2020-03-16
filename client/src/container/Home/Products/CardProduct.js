import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Card,
  Button,
} from 'react-bootstrap';

const styleText = {
    height: '50px',
    overflow: 'hidden',
    padding: '5px',
    'textOverflow': 'ellipsis',
   }

const CardProduct = ({
  product,
}) => (
  <Card>
    <Card.Body>
      <Card.Title style={styleText}>{product.nameProduct}</Card.Title>
      <Card.Img variant="top" src={product.img} />
      <Card.Text style={styleText}>{product.description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Button variant="primary">Перейти</Button>
    </Card.Footer>
  </Card>
);

CardProduct.propType = {
  category: PropTypes.shape({}),
};

export default CardProduct;
