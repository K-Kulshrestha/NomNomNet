import { Box, Typography, Button, Link } from '@mui/material'
import { styled } from '@mui/system'
import { auth } from '@/firebase'
import { useRouter } from 'next/navigation'

const NavbarContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(255,255,255,0.1);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const NavbarTitle = styled(Typography)`
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #0070f3;
  }
`;

export default function NavBar({ user, onLogout }) {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await auth.signOut()
      onLogout()
    } catch (error) {
      console.error('Error logging out', error)
    }
  }

  return (
    <NavbarContainer>
      <Link href="/" underline="none" color="inherit">
        <NavbarTitle variant="h6">
          NomNomNet
        </NavbarTitle>
      </Link>
      {user && (
        <Button 
        variant="contained" 
        onClick={handleLogout} 
        sx={{
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid black',
            marginLeft: '1rem',
            '&:hover': {
              backgroundColor: 'black',
              color: 'white',
            },
        }}
        >
        Logout
        </Button>
      )}
    </NavbarContainer>
  )
}
