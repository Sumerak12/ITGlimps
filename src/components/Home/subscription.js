import React, { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here, e.g., sending data to an API
        console.log('Email:', email);
        console.log('Country:', country);
    };

    return (
        <div className="p-8 bg-[#DDD0C8] rounded-lg shadow-lg mx-4">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 hover:text-white">
                Subscribe to the ITGlimpse Newsletter
            </h2>
            <p className="text-center text-gray-800 mb-6"> We are thrilled to have you in our vibrant community. Join us to connect, inspire, and empower each other.</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full md:w-1/2 px-4 py-3 border border-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        style={{ height: '50px' }}
                    />
                    <select
                        required
                        value={country}
                        onChange={handleCountryChange}
                        className="w-full md:w-1/2 px-4 py-3 border border-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        style={{ height: '50px' }}
                    >
                        <option value="" disabled>
                            Country
                        </option>
                        <option value="PAK">Pakistan</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                        {/* Add more countries as needed */}
                    </select>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-[#323232] text-[#DDD0C8] font-semibold py-3 px-6 rounded-lg hover:bg-[#DDD0C8] hover:text-white transition-colors duration-300 text-xl"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
