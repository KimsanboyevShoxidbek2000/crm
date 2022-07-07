import {useState , useEffect} from 'react';
import axios from 'axios';

export const useGet = (url) => {
    const [data , setData] = useState([])
    useEffect(() => {
     const get_fun = async () => {
           const response = await axios.get(`${process.env.REACT_APP_CRM_API}${url}`)
           const res = await response.data
           setData(res)
        }
        get_fun()
    } , [url])
    return data
}
