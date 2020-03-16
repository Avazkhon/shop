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

import Layout from '../Layout';

import ListCategories from './ListCategories';

class Categories extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  render() {
    const {
      categories,
    } = this.props;
    return (
      <Layout>
        <Container>
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
