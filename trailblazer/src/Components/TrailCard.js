import React, { useState, useEffect } from 'react'
import './TrailCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory} from 'react-router-dom';
const axios = require('axios');

function TrailCard(props) {
  const history = useHistory();

  console.log(props.props.info);
  const render_map = () => {
    history.push('/map-view', { props: props.props.info });
  }

  return (
    <div>
      <Card style={{height: 600, width: 400, zoom: 1 }}>
        <Card.Img variant="top" style={{height:'50%', width:'auto'}} src={props.props.info.imgMedium} />
        <Card.Body>
          <Card.Title style={{color:'black'}}>{props.props.info.name}</Card.Title>
          <Card.Text style={{'textAlign': 'left', color:'black'}}>
            {props.props.info.summary}
          </Card.Text>
          <Button variant="primary" onClick={render_map}>Discover</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default TrailCard;
