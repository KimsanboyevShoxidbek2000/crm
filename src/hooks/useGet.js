import {useState , useEffect} from 'react';
import axios from 'axios';

export const useGet = (url) => {
    const [data , setData] = useState(null)
    useEffect(() => {
     const get_fun = async () => {
           const response = await axios.get(`https://jsonplaceholder.typicode.com/${url}`)
           const res = await response.data
           setData(res)
        }
        get_fun()
    } , [url])
    return data
}
