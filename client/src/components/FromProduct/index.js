import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Form,
  Row,
  Col,
  Button,
} from 'react-bootstrap';

import {
  createProduct,
  getCategories,
  getProducts,
  changeProduct,
  deleteProduct,
} from 'actions';

import CreateFlatpickr from '../CreateFlatpickr';
import Message from 'widgets/Message';

const initData = {
  nameProduct: '',
  description: '',
  vendorCode: '',
  shelfLife: '',
  price: '',
  category: {
    nameCategory: '',
    idCategory: '',
  },
}

class FromProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initData,
      success: '',
      fail: '',
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
          nameCategory: category && category.nameCategory,
          idCategory: value,
        }
      }
    }))
  }

  handleReCreate = () => {
    this.setState({
      data: initData,
      success: '',
    })
  }

  handleChangeDateShelfLife = (res) => {
    const isChange = new Date(res) >= new Date();
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        shelfLife: isChange ? res : new Date(),
      }
    }));
  }

  handleSubmit = () => {
    const { createProduct, changeProduct, getProducts, update } = this.props;
    const { data } = this.state;
    if (40 < data.nameProduct.length || data.nameProduct.length < 5){
      this.setState({ fail: 'Длина имени должна быть от 5 до 40 символов'});
      return;
    }
    if (data.price <= 0){
      this.setState({ fail: 'Цена должна быть больше 0!'});
      return;
    }
    this.setState({ fail: ''});

    if (update) {
      changeProduct(data).then((action) => {
        if (action.status === 'SUCCESS') {
          getProducts();
          this.setState({ success:'Продукт успешно обновлен!' })
        }
      });
    } else {
      createProduct(data).then((action) => {
        if (action.status === 'SUCCESS') {
          this.setState({ data: initData, success: 'Продукт успешно создан!' })
        }
      });
    }
  }

  handleDelete = () => {
    const { deleteProduct } = this.props;
    const { data } = this.state;
    deleteProduct(data._id).then((action) => {
      if (action.status === 'SUCCESS') {
        getProducts();
        this.setState({ data: initData, success: action.response.message })
      }
    });
  }

  render() {
    const {
      data: {
        _id,
        nameProduct,
        description,
        vendorCode,
        shelfLife,
        price,
        category: {
          idCategory
        }
      },
      success,
      fail,
    } = this.state;
    const {
      auth,
      categories: {
        isFetching: isFetchingCategories,
        categories,
        error: errorCategories,
      },
      products: {
        isFetching: isFetchingProducts,
        error: errorProducts,
      },
      update,
    } = this.props;

    const isFetch = isFetchingCategories || isFetchingProducts;

    return (
      <Form>
      <h2>{update ? 'Обновление продукта': 'Создать продукта'}</h2>
        {
          !success &&
          <>
          <Form.Row className="justify-content-center">
            <Col xs="10" sm="6">
              <Form.Control
                disabled={isFetch}
                placeholder="Название продукта"
                name="nameProduct"
                value={nameProduct}
                onChange={this.handleChange}
              />
            </Col>
            <Col xs="10" sm="6">
              <Form.Control
                disabled={isFetch}
                placeholder="Описание продукта"
                name="description"
                value={description}
                onChange={this.handleChange}
              />
            </Col>
            <Col xs="10" sm="6">
              <Form.Control
                disabled={isFetch}
                placeholder="Артикул продукта"
                name="vendorCode"
                value={vendorCode}
                onChange={this.handleChange}
              />
            </Col>
            <Col xs="10" sm="6">
              <Form.Control
                disabled={isFetch}
                placeholder="цена"
                name="price"
                value={price}
                onChange={this.handleChange}
              />
            </Col>
            <Col xs="10" sm="6">
              <Form.Control
                as="select"
                disabled={isFetch}
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
          <Form.Row>
            <Col xs="10" sm="6">
              <CreateFlatpickr
                date={shelfLife}
                onChange={this.handleChangeDateShelfLife}
              />
            </Col>
          </Form.Row>
          <Button
            disabled={isFetch}
            onClick={this.handleSubmit}
          >
            {update ? 'обновить' : 'Создать'}
          </Button>

          {
            _id &&
            <Button
              disabled={isFetch}
              onClick={this.handleDelete}
            >
              Удалить
            </Button>
          }
          </>
        }

        <Message
          success={success}
          handleReCreate={this.handleReCreate}
          errorCategories={errorCategories}
          errorProducts={errorProducts}
          isFetch={isFetch}
          fail={fail}
          update={update}
        />
      </Form>
    );
  }
}

FromProduct.propType = {
  auth: PropTypes.shape({}),
  product: PropTypes.shape({}),
  categories: PropTypes.shape({}),
  createProduct: PropTypes.func,
  getProducts: PropTypes.func,
  update: PropTypes.bool,
}

function mapStateToProps(store) {
  const {
    auth,
    categories,
    products
  } = store;

  return {
    auth,
    categories,
    products,
  }
}

export default connect(mapStateToProps,{
  createProduct,
  getCategories,
  changeProduct,
  getProducts,
  deleteProduct,
})(FromProduct);
