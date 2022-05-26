import React, { useEffect, useState } from 'react';
import './App.css';
import Posts from './Post.js'

function App() {
  let [post,setPost]=useState(()=> JSON.parse(window.localStorage.getItem("post")))
  let [item,setItem]=useState('')

  useEffect(()=>{
    window.localStorage.setItem("post",JSON.stringify(post));
  },[post])

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
