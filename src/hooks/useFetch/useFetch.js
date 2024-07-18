import { useEffect, useState } from "react"
import axios from "axios";

const useFetch = (URL) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      setLoading(true);
      const {data : resData} = await axios.get(URL);
      setData(resData);
      setLoading(false);
    } catch (err) {
      setError(err.URL)
    }
  } 
  useEffect(() => {
    getData();
  },[URL])


  return {data, error, loading}
}

export default useFetch;