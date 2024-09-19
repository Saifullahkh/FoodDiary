import { Box, Card, CardContent, Grid2, Typography, Divider } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import '../style/DetailPage.css'
import { RecipesContext } from '../App'
import { useParams } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";


function DetailPage() {
  const {products} = useContext(RecipesContext)

  const { id } = useParams() // Get the product ID from the URL

  // Find the specific product using the ID from the URL
  const selectedProduct = products.find(product => product.id === parseInt(id, 10));
  return (
    <>
      <Box>
        <Grid2 container sx={{display: 'flex', justifyContent: 'space-evenly', my: 5, rowGap: 2}}>
            <Grid2 item lg={4}>
                <Card sx={{maxWidth: '560px', height: '550px', borderRadius: '28px', '@media (max-width: 600px)': {maxWidth: '350px'}}}>
                    <CardContent>
                        <Typography sx={{fontSize: '20px', fontWeight: 'bold'}} gutterBottom>{selectedProduct.name}</Typography>
                        <Typography gutterBottom>
                            {selectedProduct.instructions}
                        </Typography>
                        <Typography sx={{fontSize: '15px', fontWeight: 'bold'}} gutterBottom>Ingredient</Typography>
                        <Divider gutterBottom />
                        <Box sx={{mt: 2}}>
                          {
                            selectedProduct.ingredients.map((ingredient) => {
                              return(
                                <>
                                    <Box sx={{display: 'flex'}}>
                                        <Typography sx={{width: '12px', height: '8px', mr: 2, color: 'green'}}><FaCheckCircle /></Typography>
                                       <Typography sx={{fontSize: '16px'}}>{ingredient}</Typography>
                                    </Box>
                                </>
                              )
                            })
                          }
                        </Box>
                        
                    </CardContent>
                </Card>
            </Grid2>
            <Grid2 item lg={4}>
              <img src={selectedProduct.image} className='img-detail'  />
            </Grid2>
        </Grid2>
      </Box>
    </>
  )
}

export default DetailPage
