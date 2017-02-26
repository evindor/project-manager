import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
        <header>
            <span>{this.props.header}</span>
        </header>
        );
    }
}

export default Header;