import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';

import FromCategory from 'components/FromCategory';
import Layout from '../Layout';

class CreateCategory extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {
      auth,
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
                <FromCategory
                  auth={auth.auth}
                />
              }
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

CreateCategory.propType = {
  auth: PropTypes.shape(),
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
})(CreateCategory);
