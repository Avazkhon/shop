import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Card,
  Row,
  Col,
} from 'react-bootstrap';

import CardCategories from './CardCategories';

class ListCategories extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const {
      categories,
    } = this.props;
    return (
      <Row>
        {
          categories && categories.map((category) => (
            <Col xs="12" sm="6" md="4" lg="3" key={category._id}>
              <CardCategories
                category={category}
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
