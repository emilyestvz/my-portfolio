import { styled } from "@mui/material";
import type { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
}

const StyledButtonRoot = styled('button')(({ theme }) => ({
  backgroundColor: 'transparent',
  border: '2px solid #6D5D6E',
  color: '#6D5D6E',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  display: 'inline-flex',
  gap: '8px',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    color: '#fff',
    transition: 'background-color 0.3s ease',
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  return <StyledButtonRoot>{children}</StyledButtonRoot>;
};

export default StyledButton;
