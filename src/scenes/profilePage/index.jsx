import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import FriendListWidget from '../widgets/FriendListWidget'
import MyPostWidget from '../widgets/MyPostWidget'
import PostsWidget from '../widgets/PostsWidget'
import UserWidget from '../widgets/UserWidget'

function ProfilePage() {

  const [user, setUser] = useState(null)
  const {userId} = useParams()
  const token = useSelector((state) => state.token)
  const isNotMobileScreens = useMediaQuery("(min-width: 1000px)")

  async function getUser() {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    }) 
    const data = await response.json()
    setUser(data)
  }
  
  useEffect(() => {
    getUser()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if(!user) {
    return null
  }

  return (
    <Box>
      <Navbar />
      <Box
      width="100%"
      padding="2rem 6%"
      display={isNotMobileScreens ? "flex" : "block"}
      gap="2rem"
      justifyContent="center"
      >
        <Box flexBasis={isNotMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath}/>
          <Box m="2rem 0" />
          <FriendListWidget userId={userId}  />
        </Box>

        <Box
        flexBasis={isNotMobileScreens ? "42%" : undefined}
        mt={isNotMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <PostsWidget userId={userId} />

        </Box>
      </Box>
    </Box>
  )
}

export default ProfilePage