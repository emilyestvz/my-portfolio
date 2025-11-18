import { Container, Box, styled, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Avatar from '../../../../assets/perfil.jpg'
import StyledButton from '../../../../components/StyledButton/StyledButton';

// Styled Div (declarado fora do render para evitar criação em cada render)
const StyledHero = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: '100vh',
}))

// Styled Imagem do Avatar (fora do render)
const StyledImg = styled('img')(() => ({
    width: '100%',
    borderRadius: '50%',
}))

const Hero = () => {

    return (
     <>
        <StyledHero>

            {/*Para responsividade*/}
                {/*Para responsividade*/}
                <Container maxWidth='lg'>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4, py: 4 }}>
                        <Box sx={{ width: { xs: '100%', md: '33%' } }}>
                            <StyledImg src={Avatar} />
                        </Box>

                        <Box sx={{ width: { xs: '100%', md: '67%' }, textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography color='primary.contrastText' variant='h1'>Emily Dias</Typography>
                            <Typography color='primary.contrastText' variant='h2'>I'm a Developer FullStack</Typography>

                            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2, mt: 3 }}>
                                <StyledButton>
                                    <DownloadIcon />
                                    Download CV
                                </StyledButton>

                                <StyledButton>
                                    <AlternateEmailIcon />
                                    Contact Me
                                </StyledButton>
                            </Box>
                        </Box>

                    </Box>
        </Container>
    </StyledHero>
     </>
    )
  }
  
  export default Hero