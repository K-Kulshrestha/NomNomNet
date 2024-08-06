import { keyframes } from '@mui/system';
import { Box } from '@mui/material';
import { styled } from '@mui/system';

// Define fade-in keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Styled component with fade-in animation
const AnimatedBox = styled(Box)`
  animation: ${fadeIn} 1s ease-out;
  /* You can adjust the duration and easing as needed */
`;

export default AnimatedBox;
