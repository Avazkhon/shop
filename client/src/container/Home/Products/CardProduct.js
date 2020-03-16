import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CommonModal from 'widgets/CommonModal';
import FromProduct from 'components/FromProduct';

import {
  Card,
  Button,
  ListGroup,
} from 'react-bootstrap';

const styleText = {
  height: '50px',
  overflow: 'hidden',
  padding: '5px',
  'textOverflow': 'ellipsis',
}

class CardProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
    };
  }

  handleShowModal = () => {
    this.setState((prevState) => ({ isShowModal: !prevState.isShowModal }))
  }

  render (){
    const { isShowModal } = this.state;
    const { product } = this.props;
    return (
      <>
          <CommonModal
            open={isShowModal}
            toggle={this.handleShowModal}
          >
            <FromProduct
              update
              product={product}
            />
          </CommonModal>
        <Card>
          <Card.Body>
            <Card.Title style={styleText}>{product.nameProduct}</Card.Title>
            <Card.Img variant="top" src={product.img} />
            <Card.Text style={styleText}>{product.description}</Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>арт: </strong>{product.vendorCode}</ListGroup.Item>
              <ListGroup.Item><strong>кат: </strong>{product.category.nameCategory}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Footer>
            <Button variant="primary" onClick={this.handleShowModal}>Редактировать</Button>
          </Card.Footer>
        </Card>
      </>
    )
  }
};

CardProduct.propType = {
  product: PropTypes.shape({}),
  category: PropTypes.shape({}),
};

export default CardProduct;
