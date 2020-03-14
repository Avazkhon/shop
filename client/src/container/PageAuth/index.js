import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
} from 'react-bootstrap';

import Layout from '../Layout';

import Auth from 'components/Auth';

import {
  authoLogin,
  createNewUser,
} from '../../actions'


class PageAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        email: '',
        password: ''
      },
      isCreateNewUser: false,
    }
  }

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


  handleCreateNewUser = () => {
    const { createNewUser, authoLogin } = this.props;
    const {
      data,
    } = this.state;
    createNewUser(data).then((action)=> {
      console.log(action);
      if (action.status === 'SUCCESS') {
        authoLogin(data);
      }
    });
  }

  render() {
    const {
      auth,
    } = this.props;

    const {
      isCreateNewUser,
    } = this.state;

    let isRedirectHome;
    if (auth && auth.auth && auth.auth.userId) {
      isRedirectHome = true;
    }

    return (
      <Layout>
        <Container>
          <Row className="justify-content-center">
            {
              isRedirectHome &&
              <Col xs="8" md="4">
                <Jumbotron>
                  <h1>Привет, {auth.auth.userId.userName}</h1>
                  <p>Вы успешно зашли в систему!</p>
                  <p>
                    <Link to="/" variant="primary">Перейти в главное</Link>
                  </p>
                </Jumbotron>
              </Col>
            }
            {
              !isRedirectHome &&
              <Col xs="3" md="2">
                <Auth
                  create
                  handleAuth={this.handleAuth}
                  handleChange={this.handleChange}
                  handleCreateNewUser={this.handleCreateNewUser}
                />
              </Col>
            }
          </Row>
        </Container>
      </Layout>
    );
  }
}

PageAuth.propType = {
  createNewUser: PropTypes.func,
  authoLogin: PropTypes.func,
  auth: PropTypes.shape({}),
}

function mapStateToProps(state) {
  const {
    auth,
  } = state;
  return {
    auth,
  };
}

export default connect(mapStateToProps, {
  authoLogin,
  createNewUser,
})(PageAuth);
