import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import {
  Form,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

import style from './style';

class Auth extends Component {
  constructor(props) {
		super(props);
		this.state = {
		}
	}

  render() {
    const {
      handleChange,
      handleAuth,
      handleCreateNewUser,
      classes,
      create,
    } = this.props;

    return(
      <Form className={classes.auth} >
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Э-почта</Form.Label>
              <Form.Control
                  onChange={handleChange}
                  placeholder="Ввидите электонную почту"
                  type="email"
                  name="email"
                />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                onChange={handleChange}
                placeholder="Ввидите пароль"
                type="password"
                name="password"
              />
            </Form.Group>
          </Col>
        </Row>
        {
          create &&
          <Row>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>имя</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  placeholder="Ввидите имя"
                  type="text"
                  name="userName"
                />
              </Form.Group>
            </Col>
          </Row>
        }
        <Row>
          {
            !create &&
            <Col xs="12" sm="4">
              <Button
                variant="primary"
                className="login__btn"
                onClick={handleAuth}
              >
                Войти
              </Button>
            </Col>
          }
          {
            !create &&
            <Col xs="12" sm="12">
              <Link to='/auth'>
                <span>Регистрация</span>
              </Link>
            </Col>
          }
          {
            create &&
            <Col xs="12" sm="4">
              <Button onClick={handleCreateNewUser} >Регистрация </Button>
            </Col>
          }

        </Row>
      </Form>
    )
  }
};

Auth.propType = {
  handleChange: PropTypes.func,
  handleAuth: PropTypes.func,
  handleCreateNewUser: PropTypes.func,
  create: PropTypes.bool,
  classes: PropTypes.shape({})
}

export default injectSheet(style)(Auth);
