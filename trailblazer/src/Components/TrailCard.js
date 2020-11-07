import React, { useState, useEffect } from 'react'
// import logo from './logo.svg';
import './TrailCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');

function TrailCard(props) {
  console.log(props.props.difficulty)
  return (
    <div>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={props.props.imgMedium} />
        <Card.Body>
          <Card.Title style={{color:'black'}}>{props.props.name}</Card.Title>
          <Card.Text style={{color:'black'}}>
            {props.props.summary}
          </Card.Text>
          <Button variant="primary">Discover</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TrailCard;
