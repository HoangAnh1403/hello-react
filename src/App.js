import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Chào mừng đến với khóa học ReactJS
          </p>
         
        </header>
         <div className="App-content">Để bắt đầu học vui lòng truy cập <code>src/App.js</code> để chỉnh sửa và lưu lại</div>
      </div>
    );
  }
}

export default App;
