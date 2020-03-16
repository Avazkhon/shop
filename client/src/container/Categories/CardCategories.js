import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Card,
  Button,
  ListGroup,
} from 'react-bootstrap';

const CardCategories = ({
  category,
}) => (
  <Card>
    <Card.Body>
      <Card.Title>{category.nameCategory}</Card.Title>
      <Card.Text>{category.description}</Card.Text>
      <ListGroup variant="flush">
        <ListGroup.Item><strong>ур: </strong>{category.level}</ListGroup.Item>
        <ListGroup.Item><strong>создан: </strong>{category.createTime}</ListGroup.Item>
      </ListGroup>
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
