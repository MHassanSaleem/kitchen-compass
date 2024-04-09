import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


function Search() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + query);
        setQuery(""); // Clear the input field after search
    };

    return (
        <div className="flex justify-center items-center mt-5">
            <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
                <form onSubmit={searchHandler}>
                    <input 
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500" 
                        type="text" 
                        value={query} 
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search..."
                    />
                </form>
            </div>
        </div>
    )
}

export default Search;