import React from 'react'

interface User{
  id: number
  name: string
}

const BusinessPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const users: User[] = await res.json()

  return (
    <>
      <h1>Business</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default BusinessPage