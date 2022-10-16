import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/Context';

const Register = () => {
    const navigate=useNavigate()

    const [error,setError]=useState('')
    const [isEnable,setEnable]=useState(true)
    const {createUser,singInWithGoogle}=useContext(AuthContext)
    // console.log(createUser);
    const handleSubm =(event)=>{
        event.preventDefault()
      
        const form =event.target
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value
        createUser(email,password)
        .then(result=>{
         
            navigate('/')
       
        })
        .catch(error=>{
            setError(error)
        })
      form.reset()
   
    
        console.log(name,email,password)

    }

  

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Register now!</h1>
                        <h1 className='text-red-700 font-bold'>{error}</h1>
                        
                        
                    </div>
                    <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='/login' className="label-text-alt link link-hover">Alrady have an account?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                               <button  className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <button onClick={singInWithGoogle} className="btn btn-success">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;