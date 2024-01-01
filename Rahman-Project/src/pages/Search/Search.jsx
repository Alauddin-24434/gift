import { useState, useEffect } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { GoHeart } from 'react-icons/go';
import { IoChatbubblesOutline, IoSearch } from 'react-icons/io5';

const Search = () => {
    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(9);

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
    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    // Calculate pagination variables
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = filteredData.slice(indexOfFirstCard, indexOfLastCard);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Navigate to the previous page
    const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage === 1 ? prevPage : prevPage - 1));
    };

    // Navigate to the next page
    const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage === Math.ceil(filteredData.length / cardsPerPage) ? prevPage : prevPage + 1));
    };

    return (
        <>
            <section className='bg-slate-200'>


                <div className='flex flex-col md:grid md:grid-cols-12 gap-4 items-center justify-around max-w-4xl mx-auto'>
                    <div className='col-span-2'>
                        <p className='text-sm'>Explore More</p>
                        <p className='text-lg'>Potential Partner</p>
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
                        <div className='col-span-2 '>
                            <button className='bg-red-500 p-3 text-sm text-white rounded-md'>
                                Advanced Search
                            </button>
                        </div>
                    </div>
            

                <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-10 max-w-4xl mx-auto my-12'>
                    {currentCards.map((item) => (
                        <div key={item.id} className="w-36 h-auto md:w-72 rounded bg-white shadow-lg relative">
                            <div className="">
                                <img
                                    className="w-12 md:w-16 h-12 md:h-16 object-cover rounded-full absolute -top-6 md:-top-8 left-1/2 transform -translate-x-1/2"
                                    src={item.image}
                                    alt="Card Image"
                                />
                            </div>
                            <div className="p-1 md:p-4 pt-8 text-xs h-36 md:text-sm">
                                <div className='flex justify-between'>
                                    <p>{item.title}</p>
                                    <span><HiOutlineDotsHorizontal /></span>
                                </div>
                                <div>
                                    <p>{item.subtitle}</p>
                                    <p>{item.age}</p>
                                    <p>{item.location}</p>
                                </div>
                            </div>
                            <hr />
                            <div className="p-1 md:px-4 py-4 flex  justify-between">
                                <div className=''>
                                    <span className="inline-block bg-red-200 rounded-full p-1 text-sm font-semibold text-gray-700 mr-2"><GoHeart /></span>
                                    <span className="inline-block bg-red-200 rounded-full p-1 text-sm font-semibold text-gray-700 mr-2"><IoChatbubblesOutline /></span>
                                </div>
                                <button className='bg-red-500 md:px-3 text-xs md:text-sm text-white rounded-md h-6 md:rounded-full'>Send Request</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center my-4">
                    <button onClick={handlePrevPage} className="mx-2 px-3 py-2 bg-red-500 text-white rounded-full">
                        {'<'}
                    </button>
                    {Array.from({ length: Math.ceil(filteredData.length / cardsPerPage) }, (_, index) => (
                        <button key={index} onClick={() => paginate(index + 1)} className={`mx-2 px-3 py-2 bg-red-500 text-white rounded-full ${currentPage === index + 1 ? 'bg-opacity-75' : ''}`}>
                            {index + 1}
                        </button>
                    ))}
                    <button onClick={handleNextPage} className="mx-2 px-3 py-2 bg-red-500 text-white rounded-full">
                        {'>'}
                    </button>
                </div>

            </section>
        </>
    );
};

export default Search;
