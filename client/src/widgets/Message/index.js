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

const Message = ({
  success,
  handleReCreate,
  errorCategories,
  errorProducts,
  fail,
  isFetch,
  update,
  message,
}) => (
  <Form.Row className="justify-content-center">
    {
      success &&
      <>
        <Col xs="12" sm="8">
          <Alert variant="success">{success}</Alert>
        </Col>
        {
          !update &&
          <Col xs="12" sm="4">
            <Button
              onClick={handleReCreate}
            >
              Создать еще
            </Button>
          </Col>
        }
      </>
    }
    {
      fail &&
      <Col xs="12" sm="12">
        <Alert variant="warning">{fail}</Alert>
      </Col>
    }
    {
      message &&
      <Col xs="12" sm={{ span: 4 }}>
        <Alert variant="secondary">{message}</Alert>
      </Col>
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
    {
      isFetch &&
      <Col xs="4" sm="2">
        <Spinner animation="border" variant="primary" />
      </Col>
    }
  </Form.Row>
);

Message.propType = {
  handleReCreate: PropTypes.func,
  success: PropTypes.string,
  errorCategories: PropTypes.string,
  errorProducts: PropTypes.string,
  fail: PropTypes.string,
  message: PropTypes.string,
  isFetch: PropTypes.bool,
  update: PropTypes.bool,
};

export default Message
