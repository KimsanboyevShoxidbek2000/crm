import axios from 'axios';
import React , {useState , useEffect} from 'react'

const usePost = (url , payload) => {
    const [res , setRes] = useState(null);
    useEffect(() => {
        async function post_fun() {
            const response = await axios.post(process.env.REACT_APP_CRM_API + url , payload)
            const data = await response.data
            console.log("post data" , data);
            setRes(data)
        }
        post_fun()
    } , [])
  return res
}

export default usePost
