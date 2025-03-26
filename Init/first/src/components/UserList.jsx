import React from 'react'

const UserList = () => {

    const users=[
        {id: 1,name: "Alice",age: 23},
        {id: 2,name: "Bob",age: 30},
        {id: 3,name: "Chris",age: 27}
    ]
   



  return (
    
    <>
    <div>
        
       {users.map(user=>(
        <div key={user.id}>
           
            <h1>
           Name:  {user.name}
            </h1>
            <h1>
           Age:  {user.age}
            </h1>
            
        </div>
       ))}

    </div>
    </>
  )
}

export default UserList