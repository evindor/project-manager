import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ProjectList from '../ProjectList';
import * as firebase from 'firebase';


class User extends Component {
    constructor(props) {
        super(props);

        this.assignToCallee = this.assignToCallee.bind(this);
    }
    assignToCallee () {
        let uniq;
        let associate = this.props.Associate;
        for (let key in associate) { 
            if (associate[key].id === this.props.callee) {
                uniq = associate[key].uniq
            }
        }
        var database = firebase
            .database()
            .ref()
            .child("Projects")
            .child(`${uniq}`)
            .child("users");
        
        let id;
        this.props.lastId ? id = this.props.lastId + 1 : id = 0;
        database.push({name: this.props.name}, ()=> {console.log("Done!")});
    }

    render () {
        return (
        <div className="user" onClick={this.assignToCallee}>
          <span className="username">{this.props.name}</span>
        </div>
        );
    }
}

export default User;