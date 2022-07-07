import axios from 'axios';
import  {useState , useEffect} from 'react'

const usePost = (url , payload) => {
    console.log(url , payload);
    const [res , setRes] = useState(null);
    useEffect(() => {
        async function post_fun() {
            const response = await axios.post(`https://testcrmapi1.herokuapp.com/${url}` , payload)
            const data = await response.data
        
            setRes(data)
        }
        post_fun()
    } , [url, payload])
  return res
}
export default usePost
