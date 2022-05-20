import Plus from './Plus'

function Posts(props){
  let today = new Date()
  let year = today.getFullYear()
  let month = today.getMonth()
  let days = today.getDate()
  let day = today.getDay()
  let week = ['월요일','화요일','수요일','목요일','금요일','토요일','일요일']


  return(
  <div className="background">
  <h3>{year}년 {month +1}월 {days}일</h3>
  <h4>{week[day-1]}</h4>
  {
    props.post ? props.post.map(
      function(p,i){
        return(
          <div className='list' key={i}>
            <p>{props.post[i]}</p>
            <button onClick={()=>{
              let posts=[...props.post]
              posts.splice(i,1)
              props.setPost(posts)
            }}>delete</button>
          </div>
          )
    }) : null
  }
  <Plus item={props.item} setItem={props.setItem} post={props.post} setPost={props.setPost}></Plus>
  </div>
  )
}

export default Posts