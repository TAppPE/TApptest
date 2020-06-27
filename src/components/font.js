import { createGlobalStyle } from 'styled-components';
import playfairmedium from '../assets/fonts/PlayfairDisplay-Medium.ttf';
import playfairbold from '../assets/fonts/PlayfairDisplay-Bold.ttf';
import playfairbolditalic from '../assets/fonts/PlayfairDisplay-BoldItalic.ttf';
import playfairextrabold from '../assets/fonts/PlayfairDisplay-ExtraBold.ttf';
import playfairdisplayextrabolditalic from '../assets/fonts/PlayfairDisplay-ExtraBoldItalic.ttf';
import Robotothin from '../assets/fonts/Roboto-Thin.ttf';
import RobotoItalic from '../assets/fonts/Roboto-ThinItalic.ttf';
import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';
import RobotoThinItalic from '../assets/fonts/Roboto-ThinItalic.ttf';
import RobotoLightItalic from '../assets/fonts/Roboto-LightItalic.ttf';


export default createGlobalStyle`
   @font-face  {
       font-family: 'Roboto';
       src: local('Roboto-Thin.ttf'), local('Roboto-ThinItalic.ttf'),
       local('Roboto-Bold.ttf'), local('Roboto-Regular'),
       local('Roboto-ThinItalic.ttf'), local('Roboto-LightItalic'),
       url(${Robotothin}) format('ttf'),
       url(${RobotoItalic}) format('ttf')
       url(${RobotoBold}) format('ttf'),
       url(${RobotoRegular}) format('ttf'),
       url(${RobotoThinItalic}) format('ttf'),
       url(${RobotoLightItalic}) format('ttf');
       font-style: normal;
   }

   @font-face {
       font-family: 'Playfair';
       src: local('PlayfairDisplay-BoldItalic.ttf') local('PlayfairDisplay-Bold.ttf')
       local('PlayfairDisplay-Medium.ttf') local('PlayfairDisplay-ExtraBold.ttf') 
       local('PlayfairDisplay-ExtraBoldItalic.ttf'), 
       url(${playfairbolditalic}) format('ttf'),
       url(${playfairbold}) format('ttf'),
       url(${playfairmedium}) format('ttf'),
       url(${playfairextrabold}) format('ttf'),
       url(${playfairdisplayextrabolditalic}) format('ttf');
   }
   `;