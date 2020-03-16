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
  createCategory,
  getCategories,
  changeCategory,
} from 'actions';

import Message from 'widgets/Message';

const initData = {
  nameCategory: '',
  description: '',
  icon: '',
  level: '',
  mother: '',
}

class FromCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: initData,
      success: '',
      fail: '',
    };
  }

  componentDidMount() {
    const { getCategories, update, category } = this.props;
    getCategories();
    if (update) {
      this.setState({
        data: category,
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

  handleChangeLevel = (e) => {
    const { value } = e.currentTarget;
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        level: value,
      }
    }));
  }

  handleChangeMother = (e) => {
    const { value } = e.currentTarget;
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        mother: value,
      }
    }));
  }

  handleReCreate = () => {
    this.setState({
      data: initData,
      success: '',
    })
  }

  handleSubmit = () => {
    const { createCategory, changeCategory, getCategories, update } = this.props;
    const { data } = this.state;
    if (update) {
      changeCategory(data).then((action) => {
        if (action.status === 'SUCCESS') {
          getCategories();
          this.setState({ success: 'Категория успешна обновлена', fail: '' });
        } else {
          this.setState({ success: '' });
        }
      });
    } else {
      createCategory(data).then((action) => {
        if (action.status === 'SUCCESS') {
          this.setState({ data: initData });
          this.setState({ success: 'Категория успешна создана' })
        }
      });
    }
  }

  render() {
    const {
      data: {
        nameCategory,
        description,
        level,
        mother,
      },
      success,
      fail,
    } = this.state;
    const {
      auth,
      categories: {
        isFetching,
        categories,
        error: errorCategories
      },
      update,
    } = this.props;

    let soringCategories = [];
    if (level) {
      soringCategories = categories.filter(category => {
        if (+level === 2) {
          return +category.level === 1;
        } else if (+level === 3) {
          return +category.level < 3;
        }
      });
    }
    return (
      <Form>
        <h2>{update ? 'Обновление категорию' : 'Создать категорию'}</h2>
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
            <Form.Control
              as="select"
              disabled={isFetching}
              value={level}
              onChange={this.handleChangeLevel}
            >
              <option value="">Выбрать категорию продукта</option>
              <option value="1">Уровень 1</option>
              <option value="2">Уровень 2</option>
              <option value="3">Уровень 3</option>
            </Form.Control>
          </Col>

          {
            (+level >= 2) &&
            <Col xs="12" sm="4">
              <Form.Control
                as="select"
                disabled={isFetching}
                value={mother}
                onChange={this.handleChangeMother}
              >
                <option value="">Выбрать категорию родителя</option>
                {
                  soringCategories.map(({ _id, nameCategory}) => (
                    <option key={_id} value={_id}>{nameCategory}</option>
                  ))
                }
              </Form.Control>
            </Col>
          }
          <Col xs="12" sm="4">
            <Button disabled={isFetching}>Выбрать icon</Button>
          </Col>
        </Form.Row>

        <Button
          disabled={isFetching}
          onClick={this.handleSubmit}
        >
          {update ? 'Обновить' : 'Создать'}
        </Button>

        <Message
          success={success}
          handleReCreate={this.handleReCreate}
          errorCategories={errorCategories}
          isFetch={isFetching}
          fail={fail}
          update={update}
        />
      </Form>
    );
  }
}

FromCategory.propType = {
  auth: PropTypes.shape(),
  categories: PropTypes.shape(),
  category: PropTypes.shape(),
  createCategory: PropTypes.func,
  changeCategory: PropTypes.func,
  getCategories: PropTypes.func,
  update: PropTypes.bool,
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
  getCategories,
  changeCategory,
})(FromCategory);
