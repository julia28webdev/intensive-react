import React, { Component } from 'react';

import styled from 'styled-components';

const StyledLink = styled.a`
    color: #ffffff;
    font-size: 14px;
    font-weight: 300;
    padding-right: 33px;
    &:not(:last-child) {
        border-right: 1px dotted #fff;
    }
    &:hover {
        color: #8d8d8d;
        text-decoration: none;
    }
`

class Link extends React.Component {
    render() {
        return (
            <StyledLink href={this.props.link}>{this.props.text}</StyledLink>
        )
    }
}

export default Link;