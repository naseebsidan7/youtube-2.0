import { Stack, Box, Typography } from '@mui/material'
import React,{ useState, useEffect } from 'react'
import { SideBar, Videos } from './'
import { Link } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New')
  const [ videos, setVideos ] = useState([])

  useEffect(() => {
    

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
     .then((data) => setVideos(data.items))
    }, [selectedCategory]);


  return (
    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>
        <Box sx={{height:{sx:'auto',md:'92vh'}, borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
             <SideBar
             selectedCategory={selectedCategory}
             setSelectedCategory={setSelectedCategory}

             />
<Link target='_blank' to='https://sidan-profile.netlify.app/'>
             <Typography className='copyright' variant='body2' sx={{mt:.5,color:'#f7e6e6'}} >
              
             &#169; CopyRight 2024 NS7
          
             </Typography>
             </Link>
        </Box>

        <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
           <Typography variant='h6' fontWeight="bold" mb={2} sx={{color:'white'}}>
             {selectedCategory} <span style={{color:'#F31503'}}>Vidoes</span>
           </Typography>

           
           <Videos videos={videos} />
        </Box>
     </Stack>
  )
}

export default Feed