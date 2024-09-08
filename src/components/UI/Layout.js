import { useState } from "react"
import { Link } from "react-router-dom"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Article } from "./Article"
import { Search } from "./Search"


export const Layout = ({ children }) => {
    const [searchResults, setSearchResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    return (
        <div className="flex flex-col min-h-screen bg-[#001a33] text-[#83fdff]">
            <header className="bg-[#1d598a] text-[#83fdff] py-4 px-6 shadow">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold">ACONEWS</Link>
                    <nav className=" items-center space-x-6">
                        <Search setSearchResults={setSearchResults} setLoading={setLoading} setError={setError} />
                    </nav>
                </div>
            </header>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 py-8">
                <div className="bg-[#001a33] rounded-lg shadow p-6">
                    <h3 className="text-lg font-bold mb-4">Filter News</h3>
                    <div className="space-y-4">
                        <Dropdown label="Category" items={["General", "World", "Nation", "Business", "Technology", "Entertainment", "Sports", "Science", "Health"]} />
                    </div>
                </div>
                {searchResults.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {loading && <p>Loading search results...</p>}
                        {error && <p>{error}</p>}
                        {!loading && !error && searchResults.map((article, index) => (
                            <Article key={index} title={article.title} description={article.description} image={article.image} url={article.url} />
                        ))}
                        {!loading && !error && searchResults.length === 0 && <p>No articles found.</p>}
                    </div>
                ) : (
                    children
                )}
            </div>
        </div>
    )
}

function Dropdown({ label, items }) {
    const [open, setOpen] = useState(false)
    return (
      <div className="w-full">
            <h4 className="text-sm font-medium mb-2">{label}</h4>
            <button className="w-full border border-[#3399ff] rounded p-2 flex justify-between items-center bg-[#003366] text-[#83fdff] hover:bg-[#004080] focus:outline-none" onClick={() => setOpen(!open)}>
                  {`All ${label}`}
                  <ExpandMoreIcon className="w-4 h-4 ml-2" />
            </button>
            {open && (
                <div className="mt-2 bg-[#003366] border border-[#3399ff] rounded-lg">
                    {items.map((item, index) => (
                        <Link key={index} to={`/${item.toLowerCase()}`} className="block p-2 hover:bg-[#004080] text-[#83fdff] border-b border-[#3399ff] last:border-0 cursor-pointer">
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
