import React,{useEffect, useState} from 'react'
import Contacts from './Contacts'

const Homes = () => {
  const [data, setData] = useState({
    name: '',
    // username:'',
    email:''
  })
  const [contacts, setContacts] = useState([])

const changeHandler=e=>{
 setData({...data, [e.target.name]:e.target.value})
 
}
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setContacts(data));
}, [])

const submitHandler=e=>{
  e.preventDefault();
  
  const newcontact = [...contacts, data]
  setContacts(newcontact)
  setData("");
  console.log(contacts)
}
const deleteHandler=(indexvalue)=>{
  const newcontact = contacts.filter((contact, index)=>
    index !== indexvalue);
    setContacts(newcontact);
}
const editHandler=(e, indexvalue)=>{
  let obj = contacts[indexvalue];
  let updatedcontact = {...obj, [e.target.name]: e.target.value}
  let wholedata = contacts;
  wholedata[indexvalue] = updatedcontact;
  setContacts(wholedata);
  // console.log(contacts)
}
  return (
    <div>
      <center>


        <form onSubmit={submitHandler} autoComplete="off">
        <h2> Contact Form </h2>
        <label>Full Name: </label>
        <input type="text" name="name" placeholder='name' onChange={changeHandler}/><br />
        {/* <label>User Name: </label>
        <input type="text" name="username" placeholder='User Name' onChange={changeHandler}/><br /> */}
        <label>E-mail: </label>
        <input type="email" name="email" placeholder='E-mail' onChange={changeHandler}/><br />
        <input type="submit" class="btn btn-primary" value="Add Contact" />
        </form>
      </center>
      <Contacts contactlist={contacts} deleteHandler={deleteHandler} editHandler={editHandler}/>
    </div>
  )
}

export default Homes