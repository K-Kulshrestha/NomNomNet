// pages/home.js
'use client'
import { useEffect, useState } from 'react'
import { auth } from '@/firebase'
import Auth from '../nom-nom/auth'
import Inventory from '../nom-nom/inventory'
import { Button, Box, Typography } from '@mui/material'
import NavBar from '../components/navbar' // Import the NavBar component
import AnimatedBox from '../components/AnimatedBox';

export default function Home() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    try {
      await auth.signOut()
      setUser(null)
    } catch (error) {
      console.error('Error logging out', error)
    }
  }

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        background: 'linear-gradient(#E5FFDE, #BBCBCB)',  // Apply gradient background
        position: 'relative',
        margin: 0,
        padding: 0
      }}
    >
       <AnimatedBox width="100vw" height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <NavBar user={user} onLogout={handleLogout} />
      {!user ? (
        <Auth setUser={setUser} />
      ) : (
        <Inventory user={user} handleLogout={handleLogout} />
      )}
       </AnimatedBox>
    </Box>
  )
}
