import { Button, Container, Grid, styled, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Avatar from '../../../../assets/perfil.jpg'

const Hero = () => {

    // Styled Div
    const StyledHero = styled('div')(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
    }))

    // Styled Imagem do Avatar
    const StyledImg = styled('img')(() => ({
        width: '100%',
        borderRadius: '50%',
    }))

    return (
     <>
        <StyledHero>

            {/*Para responsividade*/}
            <Container maxWidth='lg'>
        
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <StyledImg src= {Avatar} />
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Typography color='primary.contrastText' variant='h1' textAlign='center'>Emily Dias</Typography>
                        <Typography color='primary.contrastText' variant='h2' textAlign='center'>I'm a Developer FullStack</Typography>
                        
                        <Grid container display='flex' justifyContent='center'>
                            <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                                <Button color='secondary'>
                                    <DownloadIcon />
                                    Download CV
                                </Button>
                            </Grid>
                            
                            <Grid item xs={12} md={4} display='flex' justifyContent='center'>
                                <Button color='secondary'>
                                    <AlternateEmailIcon />
                                    Contact Me
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Grid>
            </Container>
        </StyledHero>
     </>
    )
  }
  
  export default Hero