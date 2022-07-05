import {useState , useEffect} from 'react'
import axios from 'axios';
const useDelete = (url , payload) => {
   const [res ,  setRes] = useState(null);

   useEffect(() => {
     async function delete_fun() {
        const response = await axios.delete(process.env.REACT_APP_CRM_API + url);
        const data = await response.data;
        console.log(data);
        setRes(data)
     }
     delete_fun()
   } , [])
  return res
}

export default useDelete
