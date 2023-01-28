import React from 'react'
import { Box } from '@mui/system'
import Navbar from '../Navbar'
import { useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import UserWidget from '../widgets/UserWidget'
import MyPostWidget from '../widgets/MyPostWidget'

import PostsWidget from '../widgets/PostsWidget'
import AdvertWidget from '../widgets/AdvertWidget'
import FriendListWidget from '../widgets/FriendListWidget'

function HomePage() {

  const isNotMobileScreens = useMediaQuery("(min-width: 1000px)")
  const { _id, picturePath } = useSelector((state) => state.user)

  return (
    <Box>
      <Navbar/>
      <Box
      width="100%"
      padding="2rem 6%"
      display={isNotMobileScreens ? "flex" : "block"}
      gap="0.5rem"
      justifyContent="space-between"
      >
        <Box flexBasis={isNotMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath}/>
        </Box>

        <Box
        flexBasis={isNotMobileScreens ? "42%" : undefined}
        mt={isNotMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />

        </Box>
        
        {isNotMobileScreens && (
        <Box flexBasis="26%">
          <AdvertWidget />
          <Box m="2rem 0"/>
          <FriendListWidget userId={_id} />
        </Box>
        )}

      </Box>
    </Box>
  )
}

export default HomePage