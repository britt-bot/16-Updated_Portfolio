import React from "react";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import "./style.css";


export default function Project (props) {
  return (
  <Card style={{ width: '425px' }}>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.body}
        </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush tech">
      {props.tech.map(tech => <ListGroupItem>{tech}</ListGroupItem>)}
    </ListGroup>
    <Card.Body>
      <Card.Link href={props.github}>GitHub</Card.Link>
      <Card.Link href={props.deployed}>Deployed</Card.Link>
    </Card.Body>
  </Card>
  )
}