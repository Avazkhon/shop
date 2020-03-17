import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import FormProduct from 'components/FormProduct';
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
            <Col xs="12" sm="10" md="8" lg="6">
              {
                !auth.auth && null
              }
              {
                auth.auth &&
                <FormProduct/>
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
