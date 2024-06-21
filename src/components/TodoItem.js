import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const TodoItem = ({ todo, onDelete }) => {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className="todo-item">
      <Row>
        <Col>{todo.text}</Col>
        <Col md="auto">
          <Button variant="danger" onClick={handleDelete} className="btn-delete">
            Delete
          </Button>
        </Col>
      </Row>
      <hr className="todo-divider" />
    </li>
  );
};

export default TodoItem;