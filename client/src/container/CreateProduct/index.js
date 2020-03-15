import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import FromProduct from 'components/FromProduct';
import Layout from '../Layout';

class CreateProduct extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {
      auth,
      categories,
    } = this.props;
    return (
      <Layout>
        <Container>
          <Row className="justify-content-center">
            <Col>
              {
                !auth.auth && null
              }
              {
                auth.auth &&
                <FromProduct
                  auth={auth && auth.auth}
                  categories={categories}
                />
              }
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

CreateProduct.propType = {
  auth: PropTypes.shape(),
  categories: PropTypes.shape(),
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
})(CreateProduct);
