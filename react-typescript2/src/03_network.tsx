import React, { useEffect, useState } from 'react'
import axios from 'axios'


export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

const App = () => {
    const [data, setData] = useState<User[]>([])
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(
              "https://jsonplaceholder.typicode.com/users"
            ).then(result => result.data)
            setData(result)
        }
        fetchData()
    },[])
  return (
    <div>
      <h1>Network Request</h1>
     
      {
        data.map((user) => { return <li>{user.name}</li>})
      }
    </div>
  )
}

export default App