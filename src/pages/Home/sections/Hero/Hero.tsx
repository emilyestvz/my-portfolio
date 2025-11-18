import { Container, Box, styled, Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// Navbar fixa no topo
const StyledNavbar = styled(AppBar)(() => ({
    background: 'rgba(0, 0, 1, 0.95)',
    backdropFilter: 'blur(20px)',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
    borderBottom: '1px solid rgba(80, 80, 100, 0.2)',
}))

// Background 
const StyledHero = styled('div')(() => ({
    background: 'url(/src/assets/bg.gif)',
    minHeight: '100vh',
    backgroundSize: 'cover',           // Cobrir toda a tela
    backgroundPosition: 'center',      // Centralizar a imagem
    backgroundRepeat: 'no-repeat',     // Não repetir
    backgroundAttachment: 'fixed',   // Fixar o background durante o scroll - Parallax
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '80px',
    position: 'relative', 
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(60, 60, 80, 0.15) 0%, transparent 50%),
                         radial-gradient(circle at 80% 80%, rgba(50, 50, 70, 0.15) 0%, transparent 50%)`,
        animation: 'pulse 8s ease-in-out infinite',
    },
    '@keyframes pulse': {
        '0%, 100%': { opacity: 0.3 },
        '50%': { opacity: 0.6 },
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.01) 2px, rgba(255, 255, 255, 0.01) 4px)',
        pointerEvents: 'none',
    }
}))


// Texto com gradiente
const NeonText = styled(Typography)(() => ({
    background: 'linear-gradient(135deg, #d0d0d5 0%, #9090a0 50%, #d0d0d5 100%)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textAlign: 'center',
    animation: 'gradientShift 4s ease infinite',
    fontWeight: 900,
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textShadow: '0 0 20px rgba(100, 100, 120, 0.3)',
    '@keyframes gradientShift': {
        '0%, 100%': { backgroundPosition: '0% 50%' },
        '50%': { backgroundPosition: '100% 50%' },
    }
}))

// Subtítulo 
const GothicSubtitle = styled(Typography)(() => ({
    color: 'rgba(180, 180, 200, 0.9)',
    fontWeight: 300,
    letterSpacing: '6px',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '1rem',
    position: 'relative',
    '&::before, &::after': {
        content: '"◆"',
        color: "rgba(120, 120, 140, 0.7)",
        margin: '0 15px',
        fontSize: '0.8rem',
        
    }
}))

// Linha decorativa
const DecorativeLine = styled(Box)(() => ({
    height: '2px',
    background: 'linear-gradient(90deg, transparent, rgba(100, 100, 120, 0.6), transparent)',
    margin: '20px 0',
    boxShadow: '0 0 10px rgba(80, 80, 100, 0.3)',
}))

// Link da navbar
const NavLink = styled('a')(() => ({
    color: 'rgba(200, 200, 220, 0.9)',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 500,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
    padding: '8px 16px',
    '&:hover': {
        color: '#ffffff',
        textShadow: '0 0 10px rgba(150, 150, 180, 0.5)',
    }
}))

const Hero = () => {
    return (
        <>
            {/* Navbar */}
            <StyledNavbar position='fixed'>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant='h6' sx={{ 
                        fontWeight: 700, 
                        color: 'rgba(200, 200, 220, 0.95)',
                        letterSpacing: '2px'
                    }}>
                        EMILY
                    </Typography>
                    
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                        <NavLink href='#projects'>Projects</NavLink>
                        <NavLink href='#about'>About</NavLink>
                        <NavLink href='#contact'>Contact</NavLink>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton 
                            href='https://github.com/emilyestvz' 
                            target='_blank'
                            sx={{ 
                                color: 'rgba(200, 200, 220, 0.8)',
                                '&:hover': { 
                                    color: '#ffffff',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <GitHubIcon />
                        </IconButton>
                        <IconButton 
                            href='https://www.linkedin.com/in/emilycristinydias' 
                            target='_blank'
                            sx={{ 
                                color: 'rgba(200, 200, 220, 0.8)',
                                '&:hover': { 
                                    color: '#ffffff',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton 
                            href='https://instagram.com' 
                            target='_blank'
                            sx={{ 
                                color: 'rgba(200, 200, 220, 0.8)',
                                '&:hover': { 
                                    color: '#ffffff',
                                    transform: 'translateY(-2px)'
                                }
                            }}
                        >
                            <InstagramIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </StyledNavbar>

            {/* Hero Section */}
            <StyledHero>
                <Container maxWidth='lg' sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', md: 'row' }, 
                        alignItems: { xs: 'center', md: 'flex-start' }, 
                        justifyContent: { xs: 'center', md: 'flex-end' },
                        paddingTop: { xs: 4, md: 8 },
                        gap: 6,
                        py: 35,
                        px: 13
                    }}>

                        {/* Text Section */}
                        <Box sx={{ 
                            width: { xs: '100%', md: '50%' }, 
                            textAlign: { xs: 'center', md: 'left' },
                            paddingRight: { xs: 0, md: 4 }
                        }}>
                            <NeonText variant='h1' sx={{ 
                                fontSize: { xs: '2.5rem', md: '4rem' },
                                mb: 2
                            }}>
                                Emily Dias
                            </NeonText>
                            
                            <DecorativeLine />
                            
                            <GothicSubtitle>
                                Developer FullStack
                            </GothicSubtitle>
                            
                            <Typography 
                                sx={{ 
                                    color: 'rgba(150, 150, 170, 0.7)',
                                    mt: 3,
                                    mb: 4,
                                    fontStyle: 'italic',
                                    fontSize: '15px',
                                    letterSpacing: '1px',
                                    textAlign: 'center',
                                }}
                            >
                                'Transforming darkness into code, crafting digital experiences'
                            </Typography>

                            <Box sx={{ 
                                display: 'flex', 
                                justifyContent: { xs: 'center', md: 'flex-start' }, 
                                gap: 3, 
                                mt: 4,
                                flexWrap: 'wrap'
                            }}>
                            
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero