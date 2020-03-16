import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Card,
  Row,
  Col,
} from 'react-bootstrap';

import CardProduct from './CardProduct';

class ListCategories extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {
      products,
    } = this.props;
    return (
      <Row>
        {
          products && products.map((product) => (
            <Col xs="12" sm="6" md="4" lg="3" key={product._id}>
              <CardProduct
                product={product}
              />
            </Col>
          ))
        }
      </Row>
    );
  }
}

ListCategories.propType = {
  categories: PropTypes.shape({}),
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
})(ListCategories);
