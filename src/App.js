import React from 'react';
import './App.css';
import Header from './Header';
import SearchBar from './SearchBar';
import Video from './Video';
import VideoList from './VideoList';

export default function App(){
    return (
      <div className="App">
        <Header/>
        <SearchBar />
        <div className="video-column">
          <div className="left_column"><Video/></div>
          <div className="right_column"><VideoList/></div>
        </div>
      </div>
    );
   }
