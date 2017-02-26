import React, { Component } from 'react';
import Header from './Components/Header';
import Project from './Components/Project';
import Form from './Components/Form';
import * as firebase from 'firebase';


class ProjectList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      projects: this.props.initialData
    }

    this.handleAdd = this.handleAdd.bind(this);
  }

  nextId () {
    let id;
    let projects = this.state.projects;
    for (let key in projects) {
      id = this.state.projects[key].id;
    }
    return ++id
  }

  handleAdd (title) {
    let project = {
      id: this.nextId(),
      title
    }

    var database = firebase.database().ref().child("Projects");
    database.push(project, ()=> {console.log("Done!")});

    let projects = [...this.state.projects, project];
    this.setState ({ projects});

  }

  render() {
    return (
      <div>
      <Header header={"PROJECTS"}/>
        <div className="project-list">
          {this.state.projects.map(project =>
          <Project key={project.id} id={project.id} title={project.title} users={project.users} Associate={this.props.Associate}/>
          )}
        </div>
        <Form onAdd={this.handleAdd} holder={"Write a project name..."}/>
      </div>
    );
  }
}

export default ProjectList;
