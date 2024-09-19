import { Card, CardContent, CardMedia, Box, Typography, Rating, Button } from '@mui/material'
import React from 'react'
import Rectangle from '../images/Rectangle 4.png'
import { WiTime9 } from "react-icons/wi";
import { NavLink } from 'react-router-dom';

function ReciepCard({product}) {
  return (
    <>
      <Card sx={{width: '306px'}}>
        <CardMedia component='img' src={product.image} />
        <CardContent>
          <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Typography sx={{fontSize: '15px', fontWeight: 'bold', flexWrap: 'wrap'}}>{product.name}</Typography>
            <Button
             size='small' 
             sx={{
              bgcolor: '#84BD00', 
              color: 'white', 
              fontSize: '10px', 
              textTransform:'capitalize', 
              px: 1
              }}>
                <NavLink to={`/home/${product.id}`} style={{textDecoration: 'none', color: 'white'}} >Review {product.reviewCount}</NavLink>
              </Button>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between', mt: 4}}>
            <Typography sx={{fontSize: '10px'}}><WiTime9 sx={{display: 'flex', alignItems: 'center'}} /> {product.cookTimeMinutes} minutes</Typography>
            <Box>
              <Typography sx={{textAlign: 'end', fontSize: '10px'}}>{product.mealType}</Typography>
              <Rating sx={{fontSize: '10px'}}  value={product.rating}  />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}

export default ReciepCard
