
import React from 'react'
import { Box, Container } from "@mui/material";
import BaseComponent from '../../src/Components/BaseComponent';
import { useState } from 'react';


let data = [
    
    {
      title :"Sub-Category",
      pera:" The assets are distributed between equity and cash & equivalents. ",
      srcRef :"images/Group185.svg",

      details: [{
        id:1,
        color:"#75D6FF",
         heading:"Flexi Cap Fund",
         boldCount:"32.19%"
      },
        {
          id:2,
        color:"#AA75FF",
         heading:"ELSS",
         boldCount:"26.04%"
      },
        {
          id:3,
        color:"#75FFFF",
         heading:"Small Cap Fund ",
         boldCount:" 26.40%"
      },
        {
          id:4,
        color:"#FF7BF2",
         heading:"Index Fund",
         boldCount:" 12.03%"
      },
        {
          id:5,
        color:"#FFC46A",
         heading:"Sectoral Fund",
         boldCount:" 26.40%"
      },
        {
          id:6,
        color:"#FF8E5D",
         heading:"Large & Mid Cap Fund",
         boldCount:"32.19%"
      },
    ]
    }
    ,
    
     {
      title :"Fund Distribution",
      pera:" A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund. ",
      srcRef :"images/Group28.svg",

      details: [{
        color:"#75D6FF",
         heading:"Equity",
         boldCount:"32.19%"
      },
        {
        color:"#AA75FF",
         heading:"Gold",
         boldCount:"26.04%"
      },
        {
        color:"#75FFFF",
         heading:"Bond",
         boldCount:" 26.40%"
      },
        {
        color:"#FFC46A",
         heading:"Govt. Securities",
         boldCount:" 26.40%"
      },
      
    ]
    },
     {
      title :"Top Sectors",
      pera:"The assets are distributed between equity and cash & equivalents. ",
      srcRef :"images/Group331.svg",

      details: [{
        color:"#75D6FF",
         heading:"Oil & Gas",
         boldCount:"32.19%"
      },
        {
        color:"#AA75FF",
         heading:"Private Bank",
         boldCount:"26.04%"
      },
        {
        color:"#75FFFF",
         heading:"Pharmaceuticals",
         boldCount:" 26.40%"
      },
        {
        color:"#FF7BF2",
         heading:"Construction",
         boldCount:" 12.03%"
      },
        {
        color:"#FFC46A",
         heading:"Power Generation",
         boldCount:" 26.40%"
      },
        {
        color:"#FF8E5D",
         heading:"Other",
         boldCount:"12.0%"
      },
    ]
    
    },
    
  

  ]

 
const Main = () => {
   
  return (
    <Container  sx={{mt:4}}>

  
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"flex-start",height:"100vh"}}>
    {data.map((info) => (
      <div className="mr-8">
    <BaseComponent info ={info}
  
    />
    </div>
    ))}
   
   
   
    </Box>
    </Container>
  )
}

export default Main