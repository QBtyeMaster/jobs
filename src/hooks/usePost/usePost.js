import {useState} from 'react';
import axios from 'axios';

const usePost = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const postFetch = async (url, postData) => {
    try {
      setLoading(false);
      const {data: resData} = await axios.post(url, postData);
      setData(resData);
    } catch (err) {
      setLoading(true);
      setError(err.URL);
    }
  };

  return {data, error, loading, postFetch};
};

export default usePost;
