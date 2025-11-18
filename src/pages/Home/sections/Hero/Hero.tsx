import { Container, Box, styled, Typography, AppBar, Toolbar, IconButton } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Avatar from '../../../../assets/perfil.jpg'
import StyledButton from '../../../../components/StyledButton/StyledButton';

// Navbar fixa no topo
const StyledNavbar = styled(AppBar)(() => ({
    background: 'rgba(15, 15, 20, 0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 2px 20px rgba(0, 0, 0, 0.5)',
    borderBottom: '1px solid rgba(80, 80, 100, 0.2)',
}))

// Background gótico escuro
const StyledHero = styled('div')(() => ({
    background: `linear-gradient(135deg, #0f0f14 0%, #18181d 50%, #0d0d12 100%)`,
    minHeight: '100vh',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    paddingTop: '80px',
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

// Avatar com efeito sutil
const StyledImg = styled('img')(() => ({
    width: '100%',
    borderRadius: '50%',
    border: '3px solid rgba(100, 100, 120, 0.4)',
    boxShadow: `
        0 0 30px rgba(80, 80, 100, 0.5),
        0 0 60px rgba(60, 60, 80, 0.3),
        inset 0 0 40px rgba(50, 50, 70, 0.2)
    `,
    animation: 'glow 3s ease-in-out infinite',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: `
            0 0 40px rgba(100, 100, 120, 0.7),
            0 0 80px rgba(80, 80, 100, 0.5)
        `,
    },
    '@keyframes glow': {
        '0%, 100%': {
            boxShadow: `
                0 0 30px rgba(80, 80, 100, 0.5),
                0 0 60px rgba(60, 60, 80, 0.3)
            `,
        },
        '50%': {
            boxShadow: `
                0 0 40px rgba(100, 100, 120, 0.6),
                0 0 80px rgba(80, 80, 100, 0.4)
            `,
        },
    }
}))

// Texto com gradiente sutil
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

// Subtítulo gótico
const GothicSubtitle = styled(Typography)(() => ({
    color: 'rgba(180, 180, 200, 0.9)',
    fontWeight: 300,
    letterSpacing: '6px',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '1.2rem',
    position: 'relative',
    '&::before, &::after': {
        content: '"◆"',
        color: 'rgba(120, 120, 140, 0.7)',
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
            <StyledNavbar position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" sx={{ 
                        fontWeight: 700, 
                        color: 'rgba(200, 200, 220, 0.95)',
                        letterSpacing: '2px'
                    }}>
                        EMILY
                    </Typography>
                    
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#projects">Projects</NavLink>
                        <NavLink href="#skills">Skills</NavLink>
                        <NavLink href="#contact">Contact</NavLink>
                    </Box>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton 
                            href="https://github.com/emilyestvz" 
                            target="_blank"
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
                            href="https://www.linkedin.com/in/emilycristinydias" 
                            target="_blank"
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
                            href="https://instagram.com" 
                            target="_blank"
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
                        alignItems: 'center', 
                        gap: 6,
                        py: 4
                    }}>
                        {/* Avatar Section */}
                        <Box sx={{ 
                            width: { xs: '280px', md: '350px' },
                            position: 'relative'
                        }}>
                            <StyledImg src={Avatar} alt="Emily Estevez" />
                            
                            {/* Círculo decorativo ao redor do avatar */}
                            <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '120%',
                                height: '120%',
                                border: '1px solid rgba(100, 100, 120, 0.2)',
                                borderRadius: '50%',
                                animation: 'rotate 20s linear infinite',
                                '@keyframes rotate': {
                                    from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
                                    to: { transform: 'translate(-50%, -50%) rotate(360deg)' },
                                }
                            }} />
                        </Box>

                        {/* Text Section */}
                        <Box sx={{ 
                            width: { xs: '100%', md: '67%' }, 
                            textAlign: { xs: 'center', md: 'left' }
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
                                    fontSize: '1rem',
                                    letterSpacing: '1px',
                                    textAlign: 'center',
                                }}
                            >
                                "Transforming darkness into code, crafting digital experiences"
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