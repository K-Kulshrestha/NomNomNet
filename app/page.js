'use client'

import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import AnimatedBox from './components/AnimatedBox';

// Styled Components
const HeroSection = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '6rem',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  background: 'linear-gradient(#E5FFDE, #BBCBCB)',
  padding: '15vw',
  color: 'black',
  textAlign: 'center',
});

const CustomButton = styled(Button)({
  background: 'black',
  color: 'white',
  '&:hover': {
    background: 'white',
    color: 'black',
  },
});

const Navbar = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem 5%',
  position: 'absolute',
  top: 0,
  width: '100%',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Box shadow property
  backgroundColor: 'transparent', // Optional: transparent background
  zIndex: 1000, // Ensure the navbar stays on top
});

const NavButton = styled(Button)({
  color: 'black',
  border: '1px solid black',
  marginLeft: '1rem',
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
  },
});

const LandingPage = () => {
  return (
    <>
      <AnimatedBox>
      <Navbar>
        <Typography variant="h6">NomNomNet</Typography>
        <Box>
          <Link href="/nom-nom" passHref>
            <NavButton>Login</NavButton>
          </Link>
          <Link href="/nom-nom" passHref>
            <NavButton>Register</NavButton>
          </Link>
        </Box>
      </Navbar>
      <HeroSection>
        <Typography variant="h1" gutterBottom>Welcome to NomNomNet!</Typography>
        <Typography variant="h5" paragraph>The new way to track your pantry, keep your snacks organized, and never run out of your favorite ingredients.</Typography>
        <Link href="/nom-nom" passHref>
          <CustomButton>Get Started ➔</CustomButton>
        </Link>
      </HeroSection>
      </AnimatedBox>
    </>
  );
};

export default LandingPage;
