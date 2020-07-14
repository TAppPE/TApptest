import React from 'react';
import './teacherdashclasses.css';
//import { Container, Card } from 'react-bootstrap';
import ClassCard from './ClassCard';
import Classcardb from './ClassCardB';
import Classcardc from './ClassCardC';

const Card = ClassCard;
const CardB = Classcardb;
const CardC =Classcardc;

const TeacherClasses = () => {
    return(
      <div id="ClassesContainer">
          < Card />
          < CardB />
          < CardC />
          <div id="AddNew"></div>
      </div>
    );
};

export default TeacherClasses;