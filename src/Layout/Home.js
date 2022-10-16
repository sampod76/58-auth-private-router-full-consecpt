import React from 'react';
import { Link, Navigate, useLoaderData } from 'react-router-dom';

const Home = () => {
    const getPeople = useLoaderData().data
    console.log(getPeople);

    return (
        <div className='mx-4 grid grid-cols-1 md:grid-cols-3 gap-2'>

            {
                getPeople.map(people => <div className='w-full' people={people} key={people.id}>

                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src={people.logo
                        } alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{people.name
                            } Total : {people.total}</h2>

                            <div className="card-actions justify-end">
                                <Link to='/orders' className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </div>

                </div>)
            }


        </div>
    );
};

export default Home;