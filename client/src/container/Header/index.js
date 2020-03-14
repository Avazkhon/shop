import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from "react-router-dom";
import injectSheet from 'react-jss';

import {
  Navbar,
  Nav,
  Button,
} from 'react-bootstrap';

import style from './style';

import { isBrowser } from '../../utils';
import {
  getDataUserFromLocalStorag,
} from 'utils';

const navBar = [
  { id: 1, name: 'Главная', url: '/'},
  { id: 3, name: 'Категории', url: '/categories'},
];

class Header extends React.Component {

  render() {
    const {
      auth,
      classes,
    } = this.props;

    const isLogin = auth && auth.auth && auth.auth.userId;

    return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="/">All Rate</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {navBar.map((itm) => {
              return (
                <Nav.Link key={itm.id} href={itm.url}>
                  <span>{itm.name}</span>
                </Nav.Link>
              )
            })}
          </Nav>
          <Nav className={classes.header__auth} ref={this.headerAauth}>
            <Button
              variant="primary"
              onClick={ isLogin ? this.handleSubmitAuth : this.handleAuth}
            >
              {isLogin ? 'Выйти' : 'Войти'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

Header.propType = {
  authoLogin: PropTypes.func,
}

function mapStateToProps(state) {
  const {
    auth,
  } = state;
  return {
    auth,
  };
}

export default injectSheet(style)(connect(mapStateToProps, {
})(Header));
