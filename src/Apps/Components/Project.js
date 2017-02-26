import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import UserList from '../UserList';
import * as firebase from 'firebase';

class Project extends Component {
    constructor (props) {
        super (props);

        this.showMembers = this.showMembers.bind(this);
        this.showPeoples = this.showPeoples.bind(this);
        this.firebaseNameFilter = this.firebaseNameFilter.bind(this);
    }

    showMembers () {
        this.refs.select.style.display === "block" 
        ? this.refs.select.style.display = "none" 
        : this.refs.select.style.display = "block";
    }

    showPeoples () {
        var Peoples = [];
        var database = firebase.database().ref().child("Peoples");
        database.on('value', snap => {
        let dataFromServer = snap.val();
        Peoples = [];
        for (let key in dataFromServer) {
            Peoples.push(dataFromServer[key])
        }
        ReactDOM.render(
            <UserList initialData={Peoples} callee={this.props.id} Associate={this.props.Associate}/>,
        document.getElementById('root')
            );
        })
    }

    firebaseNameFilter (array) {
        let filtered = [];
            for (let key in array) {
                filtered.push(array[key])
            }
        return filtered
    }

    render () {
        let users = this.props.users;
        users ? {} : users=[{name: "Empty", id: 0}];

        users = this.firebaseNameFilter(users);

        return (
        <div className="project">
         <select ref="select" className="select-user">
              {users.map(user => {
                  return <option key={user.id}>{user.name}</option>
              })}
          </select>
          <span className="project-title">{this.props.title}</span>
          <i className="button fa fa-list" aria-hidden="true" onClick={this.showMembers}></i>
          <i className="button fa fa-plus-circle" aria-hidden="true" onClick={this.showPeoples}></i>
        </div>
        );
    }
}

export default Project;
