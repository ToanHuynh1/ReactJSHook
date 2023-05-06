import { useEffect, useState } from "react"
import axios from 'axios'
import moment from 'moment'
const useGet = (url) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoangding] = useState(true)
    const [isError, setIsError] = useState(false)
  // mãng rỗng chỉ chạy 1 lần
  useEffect(async () => {

    // tạo token
    const ourRequest = axios.CancelToken.source()
    async function getData()
    {
        try {
            let response= await axios.get(url, {
                cancelToken: ourRequest.token
            })
    
            let data = response && response.data ? response.data : []
        
            if (data && data.length > 0)
            {
                data.map(item => {
                    item.Date = moment(item.Date).format('DD/MM/YYYY') 
                    return item 
                })
        
                    data = data.reverse()
                }
            setData(data)
            setIsLoangding(false)
            setIsError(false)

            } 
            catch (error) 
            {
                if (axios.isCancel(error)){
                    console.log(error.message)
                }
                else
                {
                    setIsError(true)
                    setIsLoangding(false)
                }
             
            }
        }

        setTimeout(()=> {
            getData()
        }, 3000)
 
        return() => {
            ourRequest.cancel('Lỗi bởi người dùng')
        }
        
    }, [url])

    return{
        data, isError, isLoading 
    }
}

export default useGet