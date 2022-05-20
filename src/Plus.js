function Plus(props){
  return (
  <div className="plus">
    <input type="text" className='add' onChange={(e)=>{
      props.setItem(e.target.value) }}/>
  <button onClick={()=>{
    let postadd = [...props.post]
    let add = document.querySelector(".add")
    if(add.value.length == 0){
      props.setItem(null)
    }else{
      postadd.push(props.item);
      add.value = null
    }  
    props.setPost(postadd)
  }}>추가하기</button>
</div>
)
}

export default Plus;