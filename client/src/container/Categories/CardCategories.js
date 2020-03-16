import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Card,
  Button,
} from 'react-bootstrap';

const CardCategories = ({
  category,
}) => (
  <Card>
    <Card.Body>
      <Card.Title>{category.nameCategory}</Card.Title>
      <Card.Text>{category.description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <Card.Link href={`/product?idCategory=${category._id}`}>Перейти</Card.Link>
    </Card.Footer>
  </Card>
);

CardCategories.propType = {
  category: PropTypes.shape({}),
};

export default CardCategories;
