import {  Box, Typography } from '@mui/material'
import React,{ useState, useEffect } from 'react'
import {  Videos } from './'
import { useParams } from 'react-router-dom'

import { fetchFromAPI } from '../utils/fetchFromAPI'

const SearchFeed = () => {

 
  const [ videos, setVideos ] = useState([])
  const { searchTerm } = useParams();
  
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);



  return (
     <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography variant='h6' fontWeight="bold" mb={2} sx={{color:'white'}}>
              Search Results for: <span style={{color:'#F31503'}}>{searchTerm}</span>Videos
           </Typography>

        <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed