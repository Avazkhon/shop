import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormProduct from 'components/FormProduct';

import {
  Card,
  Button,
  ListGroup,
  Container,
  Row,
  Col,
  Modal,
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
      <Modal
        show={isShowModal}
        onHide={this.handleShowModal}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
          <FormProduct
            update
            product={product}
          />
        </Modal.Body>
      </Modal>
        <Card>
          <Card.Body>
            <Card.Title style={styleText}>{product.nameProduct}</Card.Title>
            <Card.Img variant="top" src={product.img} />
            <Card.Text style={styleText}>{product.description}</Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>цен: </strong>{product.price}</ListGroup.Item>
              <ListGroup.Item><strong>арт: </strong>{product.vendorCode}</ListGroup.Item>
              <ListGroup.Item><strong>кат: </strong>{product.category.nameCategory}</ListGroup.Item>
              <ListGroup.Item variant={new Date(product.shelfLife) < new Date() && 'warning'}>
                <strong>дата: </strong>{product.shelfLife}
              </ListGroup.Item>
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
