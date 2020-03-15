import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Form,
  Row,
  Col,
  Button,
  Spinner,
} from 'react-bootstrap';

import {
  createCategory
} from 'actions';

const initData = {
  nameCategory: '',
  description: '',
  icon: '',
}

class FromCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initData,
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

  handleSubmit = () => {
    const { createCategory } = this.props;
    const { data } = this.state;
    createCategory(data).then((action) => {
      if (action.status === 'SUCCESS') {
        this.setState({ data: initData })
      }
    });
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
      categories: {
        isFetching,
      },
    } = this.props;
    return (
      <Form>
        <h2>Создать категорию</h2>
        <Form.Row xs="12" sm="4">
          <Col xs="12" sm="4">
            <Form.Control
              disabled={isFetching}
              placeholder="Название категории"
              name="nameCategory"
              value={nameCategory}
              onChange={this.handleChange}
            />
          </Col>
          <Col xs="12" sm="4">
            <Form.Control
              disabled={isFetching}
              placeholder="Описание категории"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </Col>
          <Col xs="12" sm="4">
            <Button disabled={isFetching}>Выбрать icon</Button>
          </Col>
        </Form.Row>
        <Button
          disabled={isFetching}
          onClick={this.handleSubmit}
        >
          Создать
        </Button>

        <Form.Row className="justify-content-center">
          <Col xs="4s" sm="2">
            {
              isFetching &&
              <Spinner animation="border" variant="primary" />
            }
          </Col>
        </Form.Row>
      </Form>
    );
  }
}

FromCategory.propType = {
  auth: PropTypes.shape(),
  categories: PropTypes.shape(),
  createCategory: PropTypes.func,
}

function mapStateToProps(store) {
  const {
    categories
  } = store;

  return {
    categories
  }
}

export default connect(mapStateToProps,{
  createCategory,
})(FromCategory);
