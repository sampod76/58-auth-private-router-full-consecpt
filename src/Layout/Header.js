import { getAuth, signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import app from '../component/firebaise';
import { AuthContext } from '../Contexts/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth=getAuth(app)

const Header = () => {
    const {user,logOut}=useContext(AuthContext)

const handleOrder=()=>{
    if(!(user && user.uid)){
        toast.warn('At fast Login!', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
}
   

    return (
        <div className='navbar bg-primary text-primary-content'>
             <div className=" flex gap-3 container mx-auto">
                <a href='/' className="btn btn-ghost normal-case text-xl hover:border-2 hover:border hover:p-2 hover:bg-slate-700 hover:bg-opacity-10 p-2 hover:rounded-lg">AwsamAuth</a>
                <Link  className='hover:text-green-400 hover:font-bold font-bold hover:border-2 hover:border hover:p-2 hover:bg-slate-700 hover:bg-opacity-10 p-2 hover:rounded-lg' to='/home'>Home</Link>
                <Link  className='hover:text-green-400 hover:font-bold font-bold hover:border-2 hover:border hover:p-2 hover:bg-slate-700 hover:bg-opacity-10 p-2 hover:rounded-lg' to='/login'>Log in</Link>
                <Link onClick={handleOrder} className='hover:text-green-400 hover:font-bold font-bold hover:border-2 hover:border hover:p-2 hover:bg-slate-700 hover:bg-opacity-10 p-2 hover:rounded-lg' to='/orders'>Orders</Link>

                {/* {user?.email || <Link className='hover:text-green-400 hover:font-bold font-bold hover:border-2 hover:border hover:p-2 hover:bg-slate-700 hover:bg-opacity-10 p-2 hover:rounded-lg'  to='/register'>Register</Link>}  */}

                {user?.email ?'': <Link className='hover:text-green-400 hover:font-bold font-bold hover:border-2 hover:border hover:p-2 hover:bg-slate-700 hover:bg-opacity-10 p-2 hover:rounded-lg'  to='/register'>Register</Link>}
                <button className='mx-2 '>{user?.email}</button>
               {user?.email && <button onClick={logOut} className="btn btn-sm">singout</button>}
               <ToastContainer />
            </div>
        </div>
    );
};

export default Header;