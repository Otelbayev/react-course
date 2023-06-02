import React , {useEffect , useState} from 'react'


export const Index = () => {

  const [user, setUser] = useState([{
    name:'none',
  }])


 const addUser = () => {
  return fetch(`delte qilishimiz kerak bolgan data manzili/${localStorage.getItem('id')}`,{
    method:"PUT",
    headers:{
      'Content-Type':'aplication/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    body:JSON.stringify(user)
  })
  .then(res => res.json())
  .then(res => console.log(res))
 }



  return (
    <>
    <h1>Update form</h1>
      {
        <>
        <div>name: <input type="text" placeholder='name'/></div>
        <div>surname: <input type="text" placeholder='surname'/></div>
        <div>password: <input type="password" placeholder='passwrord'/></div>
        <div>email: <input type="email" placeholder='email'/></div>
        <div><button onClick={addUser}>add</button></div>
        </>
      }
    </>
  )
}

export default Index