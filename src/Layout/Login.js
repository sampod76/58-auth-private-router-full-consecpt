import React, { useContext, useState } from 'react';
import { AuthContext } from '../Contexts/Context';


const Login = () => {
    const [error,setError]=useState('')
    
    const {loginUser,singInWithGoogle,user}=useContext(AuthContext)
    
    const handleSubm =(event)=>{
        event.preventDefault()
        
        const form =event.target
        const email=form.email.value
        const password=form.password.value
        form.reset()
        loginUser(email,password)
        .then(result=>{

        })
        .catch(error=>{
            setError(error)
        })
        
        console.log(email,password)
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <h1 className='text-red-700 font-bold'>{error}</h1>
                        
                    </div>
                    <div  className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubm} className="card-body">
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
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                               <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                         <button onClick={singInWithGoogle} className="btn btn-success">Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; <h1>this is login</h1>