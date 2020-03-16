import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FromCategory from 'components/FromCategory';

import {
  Card,
  Button,
  ListGroup,
  Modal,
  Row,
  Col,
} from 'react-bootstrap';

class CardCategories extends Component {
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
    const { category } = this.props;
    return (
      <>
        <Modal
          show={isShowModal}
          onHide={this.handleShowModal}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Body>
            <FromCategory
              update
              category={category}
            />
          </Modal.Body>
        </Modal>
        <Card>
          <Card.Body>
            <Card.Title>{category.nameCategory}</Card.Title>
            <Card.Text>{category.description}</Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item><strong>ур: </strong>{category.level}</ListGroup.Item>
              <ListGroup.Item><strong>создан: </strong>{category.createTime}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col xs="12" sm="12">
                <Card.Link href={`/product?idCategory=${category._id}`}>Перейти</Card.Link>
              </Col>
              <Col xs="12" sm="12">
                <Button onClick={this.handleShowModal}>Редактировать</Button>
              </Col>
            </Row>
          </Card.Footer>
        </Card>
      </>
    )
  }
};


CardCategories.propType = {
  category: PropTypes.shape({}),
};

export default CardCategories;
