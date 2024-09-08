import { useEffect, useState } from 'react'
import { useFetchData } from '../hooks/fetch-hook' 
import SearchIcon from '@mui/icons-material/Search'

export const Search = ({ setSearchResults }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const { data } = useFetchData(
        searchQuery ? `https://gnews.io/api/v4/search?q=${searchQuery}&token=${process.env.REACT_APP_API_KEY}` : null
    )

    useEffect(() => {
        if (data) {
            setSearchResults(data)
        }
    }, [data, setSearchResults])

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSearch} className="flex">
            <input type="search" placeholder="Search news..." value={searchQuery} onChange={handleInputChange} className="border border-[#3399ff] rounded-l p-2 w-full bg-[#003366] text-[#83fdff] focus:outline-none"/>
            <button type="submit" className="bg-[#3399ff] text-white rounded-r px-4">
                <SearchIcon />
            </button>
        </form>
    )
}
