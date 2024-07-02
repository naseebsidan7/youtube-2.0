import axios from "axios";

export const BASEURL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const fetchFromAPI = async (url) => {
       const { data } = await axios.get(`${BASEURL}/${url}`, options);

       return data;
  }