import { Box} from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import '../style/Home.css'
import ReciepCard from '../component/ReciepCard'
import axios from 'axios'
import { RecipesContext } from '../App'


function Home() {
  const {products} = useContext(RecipesContext)
  
  return (
    <>
      
        <Box sx={{
          display: 'flex', 
          justifyContent: 'space-evenly', 
          flexWrap: 'wrap',
          my: 8,
          mx: 10, 
          rowGap: 4, 
          '@media (max-width: 600px)': {mx: 0}
          }}>
          {
           products.map(product => {
            return(
              <ReciepCard product={product} />
            )
           })  
          }
        </Box>
    
    </>  
  )
}

export default Home
