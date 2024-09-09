import { useEffect, useState } from 'react'
import { useFetchData } from '../hooks/fetch-hook' 
import SearchIcon from '@mui/icons-material/Search'
import { Article } from '../UI/Article'

export const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const { data, loading, error } = useFetchData(
        searchQuery ? `https://gnews.io/api/v4/search?q=${searchQuery}&token=${process.env.REACT_APP_API_KEY}&lang=en&country=in` : null, 2000
    )

    useEffect(() => {
        if(data) setSearchResults(data || [])
    }, [data, setSearchResults])

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
    }

    return (
        <div className='container mx-auto p-4 text-center'>
            <form onSubmit={handleSearch} className="flex items-center justify-center space-x-2 mb-6">
                <input type="search" placeholder="Search news..." value={searchQuery} onChange={handleInputChange} className="border border-[#3399ff] rounded-l p-2 w-full md:w-1/2 bg-[#003366] text-[#83fdff] focus:outline-none"/>
                <button type="submit" className="bg-[#3399ff] hover:bg-[#1a8ce0] text-white rounded-r px-4 py-2 transition-colors">
                    <SearchIcon />
                </button>
            </form>
            {loading  && <p>Loading...</p>}
            {!loading && error && <p>{error}</p>}
            {!loading && !error && searchResults && searchResults.length === 0 && <p>No articles found.</p>}
            {!loading && !error && searchResults && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
                    {searchResults.map((article, index) => (
                      <Article key={index} title={article.title} description={article.description} image={article.image} url={article.url} />
                    ))}
                </div>
            )}
        </div>
    )
}
