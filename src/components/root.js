import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/NameSetting.css'
import TodoList from './TodoList'
import NameSetting from './NameSetting'

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'NameSetting',
      name: 'Stranger',
      profilePic: '',
      filterName: '',
    };
    this.setCurrentPage = this.setCurrentPage.bind(this); 
    this.setName = this.setName.bind(this); 
  }

  setCurrentPage(target) {
    this.setState({currentPage: target})
  }

  setName(targetName, imagePath, filter) {
    if (targetName) {
      this.setState({
        name: targetName,
      });
    }
    this.setState({
      profilePic: imagePath,
      filterName: filter,
    });
    this.setCurrentPage('TodoList');
  }

  render() {
    return (
      <div className='App'>
        {this.state.currentPage === 'TodoList' && (
          <TodoList 
            text= {this.state.name +"'s Todo List"} 
            setCurrentPage={this.setCurrentPage} 
            imagePath={this.state.profilePic}
            filterName={this.state.filterName}
          />
        )}
        {this.state.currentPage === 'NameSetting' && ( 
          <>
            <NameSetting text={"My name is "} setName={this.setName}/>
          </>
        )}
      </div>
    );
  }
}

export default Root
