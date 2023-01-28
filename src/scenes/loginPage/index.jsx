import React from 'react'
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material'
import Navbar from '../navbar'
import Form from './Form'


function LoginPage() {
  const theme = useTheme()
  const isNotMobileScreens = useMediaQuery("(min-width: 1000px)")
  return (
    <Box>
      <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
        <Typography 
        fontWeight="bold"
        fontSize="32px"
        color="primary"
        >Devsocial
        </Typography>
      </Box>

      <Box width={isNotMobileScreens ? "50%" : "93%"} p="2rem" m="2rem auto" borderRadius="1.5rem" backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem"}}>
          Welcome to Devsocial. The best social media, just trust me.
        </Typography>

      <Form/>
      </Box>
    </Box>

  )
}

export default LoginPage