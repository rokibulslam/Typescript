import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

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
interface ContextResult{
    users:User[]
}
const UserContext = createContext<ContextResult>({users:[]});

function UserContextProvider({ children }: { children: React.ReactNode }) {
    const [users, setUsers] = useState<User[]>([])
    useEffect(() => {
        
    },[])
    return {children}
}

const App = () => {
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    
  }, []);
  return (
    <div>
      <h1>Context API</h1>

      {data.map((user) => {
        return <li>{user.name}</li>;
      })}
    </div>
  );
};

export default App;
