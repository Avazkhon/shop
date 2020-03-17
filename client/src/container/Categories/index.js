import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import {
  getCategories,
} from 'actions';

import Message from 'widgets/Message';

import Layout from '../Layout';

import ListCategories from './ListCategories';

class Categories extends React.Component {
  constructor(props) {
    super(props);

  }

  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    const {store} = ctx;
    const { idCategory } = req.query;
    if (store && store.dispatch) {
      await store.dispatch(getCategories());
    }
  }

  componentDidMount() {
    const { getCategories, categories } = this.props;
    if (!categories.categories) {
      getCategories();
    }
  }

  render() {
    const {
      categories,
    } = this.props;
    return (
      <Layout>
        <Container>
          <Message
            fail={categories.error}
            message={
              !categories.isFetching
              && categories.categories && !categories.categories.length &&
              'Пока тут пусто!'
            }
            isFetch={categories.isFetching}
          />
          <Row>
            <Col>
              <ListCategories
                categories={categories && categories.categories}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

Categories.propType = {
  categories: PropTypes.shape({}),
  auth: PropTypes.shape({}),

  getCategories: PropTypes.func,
}

function mapStateToProps(state) {
  const {
    auth,
    categories,
  } = state;
  return {
    auth,
    categories,
  };
}

export default connect(mapStateToProps, {
  getCategories,
})(Categories);
