import { useState } from "react";

type AuthUser = {
    name: string;
    email: string;
}
const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    // const [user, setUser] = useState({} as AuthUser);
    //  Type Assertion: If sure never logout.
     const handleLogin = () => {
         setUser({
             name: 'Rokibul', 
                 email:'rokibul@gmail.com'
         })
     };
     const handleLogout = () => {
       setUser(null)
     };
     return (
       <div>
         <button onClick={handleLogin}>Login</button>
         <button onClick={handleLogout}>Logout</button>
         <div>User Name is {user?.name}</div>
         <div>User Name is {user?.email}</div>
       </div>
     );
}

export default User