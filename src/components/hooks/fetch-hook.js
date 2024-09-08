import { useState, useEffect } from 'react'

//Free tier allows 1 req/ sec
export const useFetchData = (url, delay = 1000) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const debounceFetch = setTimeout(() => {
        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(url)
                const result = await response.json()
                if (!response.ok) {
                  setError('Failed to fetch data')
                  return
                }
                setData(result.articles || result) 
            } 
            catch(err) {
                setError(err.message)
            } 
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, delay)
    //Cleanup when url changes/ unmount
    return () => clearTimeout(debounceFetch)
  }, [url, delay])
  
  return { data, loading, error }
}


