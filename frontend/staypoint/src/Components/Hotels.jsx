import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MapPinIcon, StarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom'

const Hotels = () => {

    const [hotels, setHotels] = useState([])

    useEffect(() => {
        async function fetchHotels() {
            const {data} = await axios.get('/api/hotels/');
            setHotels(data);
        }
        fetchHotels();
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="text-center my-30 mx-10">
            <h1 className="text-4xl font-bold text-gray-800 p-2">Our <span className='text-cyan-500'>Hotels</span></h1>
            <p className="text-lg my-1 text-gray-600">Explore hundreds of hotels opportunities with all the information you need.</p>
            
            <div className="w-full flex flex-wrap gap-4 mt-10">
                {
                    hotels.map((hotel) => (
                        <div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-12px)] flex flex-col border-2 border-[#fff] rounded-xl p-4 bg-white shadow-2xl" key={hotel.id}>
                                <div className="flex flex-col justify-center items-center mb-4">
                                    <div className="aspect-[3/2] flex items-center justify-center rounded-xl">
                                        {hotel.image ? (
                                            <img className="w-full h-full object-cover rounded-xl" src={`http://127.0.0.1:8000${hotel.image}`} alt="Hotel Logo" />
                                        ) : (
                                            <img className="w-full h-full object-cover rounded-xl" src="/default-hotel.jpg" alt="Hotel Logo" />
                                        )}
                                    </div>
                                    <div className="text-center pt-3">
                                        <h1 className="text-xl font-bold text-gray-800">{hotel.name}</h1>
                                    </div>
                                </div>
                                <div className="flex justify-between mb-5">
                                    <div className="flex items-center">
                                        <MapPinIcon className="h-6 w-6 text-blue-500 mr-2" />
                                        <span className="text-gray-600">{hotel.location}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <StarIcon className="h-5 w-5 text-yellow-500 mr-2"/>
                                        <span className="text-gray-600 font-semibold">{hotel.rating}</span>
                                    </div>
                                </div>
                                <Link to={`/hotels/${hotel.id}`}>
                                    <button className="w-full px-6 py-2 text-white text-md font-semibold rounded-lg shadow-md bg-cyan-500 hover:opacity-90 transition cursor-pointer">
                                        View Details
                                    </button>
                                </Link>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default Hotels;
