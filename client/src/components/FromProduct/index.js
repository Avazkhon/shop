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
  createProduct,
  getCategories,
  changeProduct,
} from 'actions';

const initData = {
  nameProduct: '',
  description: '',
  vendorCode: '',
  category: {
    nameCategory: '',
    idCategory: '',
  }
}

class FromProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initData,
    };
  }

  componentDidMount() {
    const { getCategories, update, product } = this.props;
    getCategories();
    if (update) {
      this.setState({
        data: product,
      })
    }
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

  handleChangeSelect = (e) => {
    const { categories: { categories }} = this.props;
    const { name, value } = e.currentTarget;
    const category = categories.find((category) => category._id === value)
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        category: {
          nameCategory: category.nameCategory,
          idCategory: value,
        }
      }
    }))
  }

  handleSubmit = () => {
    const { createProduct, changeProduct, update } = this.props;
    const { data } = this.state;
    if (update) {
      changeProduct(data);
    } else {
      createProduct(data).then((action) => {
        if (action.status === 'SUCCESS') {
          this.setState({ data: initData })
        }
      });
    }
  }

  render() {
    const {
      data: {
        nameProduct,
        description,
        vendorCode,
        category: {
          idCategory
        }
      },
    } = this.state;
    const {
      auth,
      categories: {
        isFetching,
        categories,
      },
      update,
    } = this.props;

    return (
      <Form>
        <h2>{update ? 'Обновление продукта': 'Создать продукта'}</h2>
        <Form.Row xs="12" sm="4">
          <Col xs="12" sm="4">
            <Form.Control
              disabled={isFetching}
              placeholder="Название продукта"
              name="nameProduct"
              value={nameProduct}
              onChange={this.handleChange}
            />
          </Col>
          <Col xs="12" sm="4">
            <Form.Control
              disabled={isFetching}
              placeholder="Описание продукта"
              name="description"
              value={description}
              onChange={this.handleChange}
            />
          </Col>
          <Col xs="12" sm="4">
            <Form.Control
              disabled={isFetching}
              placeholder="Артикул продукта"
              name="vendorCode"
              value={vendorCode}
              onChange={this.handleChange}
            />
          </Col>
          <Col xs="12" sm="4">
          <Form.Control
            as="select"
            name="category"
            value={idCategory}
            onChange={this.handleChangeSelect}
          >
            <option value="">Выбрать категорию продукта</option>
            <option value="root">общее</option>
            {
              categories && categories.map(({ _id, nameCategory }) => (
                <option
                  key={_id}
                  value={_id}
                >
                  {nameCategory}
                </option>
              ))
            }
          </Form.Control>
          </Col>
        </Form.Row>
        <Button
          disabled={isFetching}
          onClick={this.handleSubmit}
        >
          {update ? 'обновить' : 'Создать'}
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

FromProduct.propType = {
  auth: PropTypes.shape({}),
  product: PropTypes.shape({}),
  categories: PropTypes.shape({}),
  createProduct: PropTypes.func,
  update: PropTypes.bool,
}

function mapStateToProps(store) {
  const {
    auth,
    categories,
  } = store;

  return {
    auth,
    categories,
  }
}

export default connect(mapStateToProps,{
  createProduct,
  getCategories,
  changeProduct,
})(FromProduct);
