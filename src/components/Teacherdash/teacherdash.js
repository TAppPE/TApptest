import React from 'react';
import './teacherdash.css';
import navigation from '../Homepage/navigation';
import footer from '../Homepage/footer';
import Theader from './teacherdashheader';
import TeacherClass from './teacherdashclasses';
import addNew from './addNew';


const Nav = navigation;
const Foot = footer;
const TeachHead = Theader;
const Teacherclasses = TeacherClass
const AddNew = addNew;


const TeacherDash = () => {
    return (
      <div id="Teachdash">
          < Nav />
          < TeachHead />
          < AddNew />
          < Teacherclasses />
          < Foot />
      </div>
    );
};

export default TeacherDash;