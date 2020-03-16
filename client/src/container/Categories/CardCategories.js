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
      <Button variant="primary">Перейти</Button>
    </Card.Body>
  </Card>
);

CardCategories.propType = {
  category: PropTypes.shape({}),
};

export default CardCategories;
