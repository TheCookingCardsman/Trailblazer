import React, { useState, useEffect } from 'react'
// import logo from './logo.svg';
import './TrailCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
const axios = require('axios');

function TrailCard() {
  return (
    <div>
      <Card style={{ width: '36rem' }}>
        <Card.Img variant="top" src="https://cdn2.apstatic.com/photos/hike/7002768_smallMed_1554227254.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '36rem' }}>
        <Card.Img variant="top" src="https://cdn2.apstatic.com/photos/hike/7000727_smallMed_1554159596.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TrailCard;
