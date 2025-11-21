// Footer.tsx
import { Container, Box, Typography, IconButton, Divider, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledFooter = styled('footer')(() => ({
    background: 'linear-gradient(180deg, #0d0d12 0%, #000000 100%)',
    borderTop: '1px solid rgba(100, 100, 120, 0.2)',
    padding: '0px 0 30px',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(120, 120, 140, 0.5), transparent)',
    }
}));

const Footer = () => {
    return (
        <StyledFooter>
            <Container maxWidth="lg">
                {/* Seção Principal */}
                <Box sx={{ 
                    textAlign: 'center',
                    mb: 4
                }}>
                </Box>

                {/* Redes Sociais */}
                <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 2,
                    mb: 4
                }}>
                    <IconButton 
                        href="https://github.com/emilyestvz" 
                        target="_blank"
                        sx={{ 
                            color: 'rgba(200, 200, 220, 0.8)',
                            border: '1px solid rgba(100, 100, 120, 0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': { 
                                color: '#ffffff',
                                borderColor: 'rgba(180, 180, 200, 0.6)',
                                transform: 'translateY(-4px)',
                                boxShadow: '0 4px 20px rgba(60, 60, 80, 0.4)',
                            }
                        }}
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton 
                        href="https://linkedin.com/in/emilycristinydias" 
                        target="_blank"
                        sx={{ 
                            color: 'rgba(200, 200, 220, 0.8)',
                            border: '1px solid rgba(100, 100, 120, 0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': { 
                                color: '#ffffff',
                                borderColor: 'rgba(180, 180, 200, 0.6)',
                                transform: 'translateY(-4px)',
                                boxShadow: '0 4px 20px rgba(60, 60, 80, 0.4)',
                            }
                        }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton 
                        href="mailto:emilycristiny_@live.com"
                        sx={{ 
                            color: 'rgba(200, 200, 220, 0.8)',
                            border: '1px solid rgba(100, 100, 120, 0.3)',
                            transition: 'all 0.3s ease',
                            '&:hover': { 
                                color: '#ffffff',
                                borderColor: 'rgba(180, 180, 200, 0.6)',
                                transform: 'translateY(-4px)',
                                boxShadow: '0 4px 20px rgba(60, 60, 80, 0.4)',
                            }
                        }}
                    >
                        <EmailIcon />
                    </IconButton>
                </Box>

                {/* Links Rápidos */}
                {/* <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 4,
                    mb: 4,
                    flexWrap: 'wrap'
                }}>
                
                </Box> */}

                <Divider sx={{ 
                    borderColor: 'rgba(100, 100, 120, 0.2)',
                    mb: 3
                }} />

                {/* Copyright */}
                <Box sx={{ 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <Typography 
                        sx={{ 
                            color: 'rgba(130, 130, 150, 0.6)',
                            fontSize: '0.85rem',
                            letterSpacing: '1px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1
                        }}
                    >
                        © {new Date().getFullYear()} Emily Dias. Made with 
                        <FavoriteIcon sx={{ fontSize: '1rem', color: 'rgba(180, 100, 120, 0.8)' }} /> 
                        and code.
                    </Typography>
        
                </Box>
            </Container>
        </StyledFooter>
    );
};

export default Footer;