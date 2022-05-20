import React, { useEffect, useState } from 'react';
import './App.css';
import Plus from './Plus'
import Posts from './Post.js'

function App() {
  let [post,setPost]=useState([])
  let [item,setItem]=useState('')

  return (
    <>
    <div className="App">
      <h2 className='title'>To Do List</h2>
      <Posts post={post} setPost={setPost} item={item} setItem={setItem}>
      </Posts>
    </div>
    </>
  );
}

export default App;
