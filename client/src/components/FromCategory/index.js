import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Form,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

class FromCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        nameCategory: '',
        description: '',
        icon: '',
      }
    };
  }

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: value,
      }
    }));
  }

  render() {
    const {
      data: {
        nameCategory,
        description,
      },
    } = this.state;
    const {
      auth,
    } = this.props;
    return (
      <Form>
        <Form.Row>
          <Col xs="12" ms="3">
            <Form.Control
              placeholder="Название категории"
              name="nameCategory"
              value={nameCategory}
              onChange={this.handleChange}
            />
          </Col>
          <Col xs="12" ms="3">
            <Form.Control
              placeholder="Описание категории"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </Col>
        </Form.Row>
        <Button>Выбрать icon</Button>
        <Button>Создать</Button>
      </Form>
    );
  }
}

FromCategory.propType = {
  auth: PropTypes.shape(),
}

export default FromCategory;
