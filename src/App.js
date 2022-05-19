import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [post,setPost]=useState(['책보기' , '잠자기'])
  let [item,setItem]=useState('')

  

  return (
    <>
    <div className="App">
      <h2 className='title'>To Do List</h2>
      <div className="background">
        <h3>2022년 5월 18일</h3>
        <h4>수요일</h4>
        {
          post.map(
            function(p,i){
              return(
                <div className='list' key={i}>
                  <p>{post[i]}</p>
                  <button onClick={()=>{
                    let posts=[...post]
                    posts.splice(i,1)
                    setPost(posts)
                  }}>delete</button>
                </div>
                )
          })
        }
        <div className="plus">
          <input type="text" className='add' onChange={(e)=>{
            setItem(e.target.value)
            console.log(item)
          }}/>
          <button onClick={()=>{
            let postadd = [...post]
            let add = document.querySelector(".add")
            if(item.length == 0){
            }else{
              postadd.push(item);
              add.value = null
            }  
            setPost(postadd)
          }}>추가하기</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
