import React, { Component } from 'react';
import Header from './Components/Header';
import User from './Components/User';
import Form from './Components/Form';
import * as firebase from 'firebase';


class UserList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      users: this.props.initialData,
      callee: this.props.callee
    }

    this.handleAdd = this.handleAdd.bind(this);
  }

  nextId () {
    let id;
    let users = this.state.users;
    for (let key in users) {
      id = this.state.users[key].id;
    }
    return ++id
  }

  handleAdd (name) {
    let user = {
      id: this.nextId(),
      name
    }
    let users = [...this.state.users, user];
    this.setState ({ users});

    var database = firebase.database().ref().child("Peoples");
    database.push(user, ()=> {console.log("Done!")});

  }
  back () {
    location.reload();
  }

  render() {
    return (
      <div>
      <Header header={"PEOPLES"}/>
        <div className="user-list">
          {this.state.users.map(user =>
          <User
           
          name={user.name} 
          callee={this.state.callee} 
          Associate={this.props.Associate} />
          )}
        </div>
        <Form onAdd={this.handleAdd} holder={"Write a user name..."}/>
        <button className="cancel-button" onClick={this.back}>Cancel</button>
      </div>
    );
  }
}

export default UserList;
