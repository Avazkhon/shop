import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import injectSheet from 'react-jss';

import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
} from 'react-bootstrap';

import style from './style';
import Auth from '../../components/Auth';

import { isBrowser } from '../../utils';

import {
  authoLogin,
  authoLogAut,
  getUserById,
} from 'actions';

import {
  getDataUserFromLocalStorag,
} from 'utils';

const navBar = [
  { id: 1, name: 'Главная', url: '/'},
  { id: 2, name: 'Категории', url: '/categories'},
  { id: 3, title: 'Создать',
    droplist: [
      { id: 31, name: 'Создать продукт', url: '/create-product'},
      { id: 32, name: 'Создать категорию', url: '/create-category'},
    ]
  },

];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.headerAauth = React.createRef();

    this.state = {
      data: {
        email: '',
        password: ''
      },
      isAuth: false,
    }
  }

  componentDidMount() {
    const {
      getUserById,
    } = this.props;
    const user = getDataUserFromLocalStorag();
    if (user && user.userId) {
      getUserById('user/?id=' + user.userId);
    }
   if (isBrowser()) {
    document.addEventListener('mousedown', this.leaveByClick, false);
   }
 }

 componentWillUnmount() {
  const { isMobileVersion, indexMenu } = this.props;
  if (isBrowser()) {
    document.removeEventListener('mousedown', this.leaveByClick);
  }
}

  leaveByClick = (event) => {
    const { classes } = this.props;
    const navBlock = this.headerAauth;
    const searchPanel = document.getElementsByClassName(classes.header__auth)[0];
    const path = event.path || (event.composedPath && event.composedPath());
    if (path
      && path.includes
      && !path.includes(navBlock)
      && (!searchPanel
        || !path.includes(searchPanel)
        || event.target.classList.contains(classes.header__auth)
      )
    ) {
      if (this.state.isAuth) {
        this.setState({
          isAuth: false
        });
      }
    }
  };


  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      data: {
        ...this.state.data,
        [name]: value
      }
    })
  }

  handleAuth = () => {
    this.setState((prevState) => ({ isAuth: !prevState.isAuth }))
  }

  handleSubmitAuth = () => {
    const {
      data,
    } = this.state;
    const {
      auth,
      authoLogAut,
      authoLogin,
    } = this.props;
    if (auth.auth && auth.auth.userId) {
      authoLogAut(data);
    } else {
      this.setState((prevState) => ({ isAuth: !prevState.isAuth }));
      authoLogin(data);
    }
  }

  render() {
    const {
      auth,
      classes,
    } = this.props;

    const {
      isAuth,
    } = this.state;

    const isLogin = auth.auth && auth.auth.userId;

    return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Brand href="/">All Rate</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {navBar.map((itm) => {
              if (itm.droplist) {
                return (
                  <NavDropdown key={itm.id} title={itm.title} id="basic-nav-dropdown">
                    {
                      itm.droplist.map(({ url, id, name }) => (
                        <NavDropdown.Item key={id} href={url}>{name}</NavDropdown.Item>
                      ))
                    }
                  </NavDropdown>
                )
              }
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
            {
              isAuth &&
              <Auth
                isHeder
                handleChange={this.handleChange}
                handleAuth={this.handleSubmitAuth}
              />
            }
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
  authoLogin,
  authoLogAut,
  getUserById,
})(Header));
