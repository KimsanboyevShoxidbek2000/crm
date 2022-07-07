import axios from 'axios'
import {useState ,  useEffect} from 'react'

const usePut = (url , payload) => {

   
    const [res , setRes] = useState(null)
    useEffect(() => {
        async function put_fun() {
            const response = await axios.put(process.env.REACT_APP_CRM_API + url , payload);
            const data = await response.data;
            setRes(data)
        }
        put_fun()
    } , [url, payload])
  return res
}

export default usePut
