import { useParams } from 'react-router-dom'
import { Article } from '../UI/Article'
import { useFetchData } from '../hooks/fetch-hook'

export const CategoryPage = () => {
  const { category } = useParams()
  const API_URL = `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_API_KEY}&lang=en&country=in&category=${category}`
  const { data: articles, loading, error } = useFetchData(API_URL)
  return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading && <p>Loading...</p>}
            {!loading && error && <p>{error}</p>}
            {!loading && !error && articles.map((article, index) => (
              <Article key={index} title={article.title} description={article.description} image={article.image} />
            ))}
        </div>
    )
}
