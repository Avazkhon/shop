import React from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  Row,
  Col,
  Button,
  Alert,
  Spinner,
} from 'react-bootstrap';

const MessageForProduct = ({
  success,
  handleReCreate,
  errorCategories,
  errorProducts,
  isFetch,
}) => (
  <Form.Row className="justify-content-center">
    {
      success &&
      <>
        <Col xs="12" sm="8">
          <Alert variant="success">{success}</Alert>
        </Col>
        <Col xs="12" sm="4">
          <Button
            onClick={handleReCreate}
          >
            Создать еще
          </Button>
        </Col>
      </>
    }
    {
      errorCategories &&
      <Col xs="12" sm="12">
        <Alert variant="danger"><strong>Категорий: </strong>{errorCategories}</Alert>
      </Col>
    }
    {
      errorProducts &&
      <Col xs="12" sm="12">
        <Alert variant="danger"><strong>Продукт: </strong>{errorProducts}</Alert>
      </Col>
    }
    <Col xs="4" sm="2">
      {
        isFetch &&
        <Spinner animation="border" variant="primary" />
      }
    </Col>
  </Form.Row>
);

MessageForProduct.propType = {
  handleReCreate: PropTypes.func,
  success: PropTypes.string,
  errorCategories: PropTypes.string,
  errorProducts: PropTypes.string,
  isFetch: PropTypes.bool,
};

export default MessageForProduct
