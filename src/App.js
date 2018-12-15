import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import styled from 'styled-components';


class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <SayFullName name="Julia" surname="Fedyakova" link="https://vk.com/yuliya_kf" />
                <SayFullName name="Jul" surname="Fed" link="https://vk.com/yuliya_kf" />
                <SayFullName name="J" surname="F" link="https://vk.com/yuliya_kf" />
            </div>
        );
    }
}


function SayFullName(props) {
    return (
        <div>
            <h1>My name is {props.name}, my surname is {props.surname}</h1>
            <a href={props.link}>Link to my profile</a>
        </div>
    )
}



export default App;
