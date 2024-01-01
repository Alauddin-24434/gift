import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";


const Search = () => {
    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
   
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/public/search.json');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // Filter data based on the search input
    // const data= data.filter(item =>
    //     item.title.toLowerCase().includes(searchInput.toLowerCase())
    // );

    return (
        
        <div className='flex flex-col md:grid md:grid-cols-12 gap-4 items-center justify-around max-w-4xl mx-auto'>
        <div className='col-span-4'>
           
            <p className='text-lg'>Matches Information</p>
        </div>
        
            <div className='col-span-8'>
                <div className="relative mx-auto my-4 max-w-md rounded-md">
                    <input
                        type="text"
                        placeholder="Search your Match"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 bg-red-500 p-1 rounded-md pr-3 flex items-center pointer-events-none">
                        <IoSearch className="text-white" />
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Search;