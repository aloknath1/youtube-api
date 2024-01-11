import React, { useEffect, useState } from 'react';
import './App.css';
import {searchVideos} from './services/index';
import Header from './Header';
import SearchBar from './SearchBar';
import Video from './Video';
import VideoList from './VideoList';
import {data} from './data/playlist';

export default function App(){ 
  const [allVideos, setAllVideos] = useState([]);
  let result = [];
 
  useEffect(() => {
    async function fetchData(){      
      const resJson = await searchVideos();    
      return resJson;
    }
    const videosData = data;  
    console.log("fetch is called....", videosData);
    setAllVideos(videosData); 
      console.log("allVideos", allVideos);   
  },[]);
    return (
      <div className="App">
        <Header/>
        <SearchBar />
        <div className="video-column">
          <div className="left_column"><Video allVideos={allVideos}/></div>
          <div className="right_column"><VideoList allVideos={allVideos} /></div>
        </div>
      </div>
    );
   }
