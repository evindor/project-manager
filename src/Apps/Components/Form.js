import React, { Component } from 'react';

class Form extends Component {
    constructor (props) {
        super(props);

        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event) {
        event.preventDefault();
        let title = this.refs.title.value;
        if (title) {
            this.props.onAdd(title);
        }
        this.refs.title.value = "";
    }
    render () {
        return (
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="title" placeholder={this.props.holder} />
          <button type="submit">Add</button>
        </form>
        );
    }
}

Form.propTypes = {
    onAdd: React.PropTypes.func.isRequired
}

export default Form;