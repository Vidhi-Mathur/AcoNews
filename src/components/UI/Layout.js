import { useState } from "react"
import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.jpeg"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchIcon from '@mui/icons-material/Search'


export const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#001a33] text-[#83fdff]">
            <header className="bg-gradient-to-r from-[#1d598a] to-[#2980b9] text-[#83fdff] py-4 px-6 shadow">
                <div className="container mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
                        <img src={Logo} alt="Logo" className="h-10 w-10 rounded-full"/>
                        <span className="text-3xl tracking-wide">ACONEWS</span>
                    </Link>
                    <nav className="flex items-center">
                        <Link to="/search" className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#003366] hover:bg-[#004080] transition-colors duration-200">
                        <SearchIcon className="text-[#83fdff]" />
                        <span className="text-[#83fdff] font-medium">Search</span>
                        </Link>
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
                {children}
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
