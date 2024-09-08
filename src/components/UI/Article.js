import { Link } from "react-router-dom";
import EastIcon from '@mui/icons-material/East';

export const Article = ({ title, description, image, url }) => {
    return (
        <div className="bg-[#002b4d] rounded-lg shadow border border-[#83fdff]">
            <img src={image || "/placeholder.svg"} alt={title} width={400} height={225} className="rounded-t-lg object-cover w-full aspect-video"/>
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-[#99ccff] mb-4">{description}</p>
                <Link to={url} className="inline-flex items-center text-[#3399ff] hover:text-[#66b3ff]">Read More
                    <EastIcon className="w-4 h-4 ml-2" />
                </Link>
            </div>
        </div>
    )
  }
  