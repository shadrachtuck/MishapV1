import { createGlobalStyle } from 'styled-components';
import RobotoMono from './RobotoMono-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto Mono';
        src: local('./RobotoMono-Regular.ttf'), local('RobotoMono-Regular'),
        url(${RobotoMono}) format('ttf'),
        url(${RobotoMono}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;