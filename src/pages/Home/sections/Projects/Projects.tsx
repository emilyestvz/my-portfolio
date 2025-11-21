import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Chip, Button, Box, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const StyledProjects = styled('div')(() => ({
    background: 'linear-gradient(135deg, #040407ff 0%, #000000ff 50%, #0f0f14 100%)',
    minHeight: '100vh',
    padding: '80px 0',
    position: 'relative',
    "&::before": {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 30% 40%, rgba(60, 60, 80, 0.1) 0%, transparent 50%)`,
        pointerEvents: 'none',
    }
}));

const StyledCard = styled(Card)(() => ({
    height: '100%',
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(25, 25, 35, 0.6)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(100, 100, 120, 0.2)',
    borderRadius: '16px',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-8px)',
        border: '1px solid rgba(120, 120, 140, 0.4)',
        boxShadow: '0 8px 30px rgba(60, 60, 80, 0.4)',
    },
}));

const SectionTitle = styled(Typography)(() => ({
    background: 'linear-gradient(135deg, #d0d0d5 0%, #9090a0 50%, #d0d0d5 100%)',
    backgroundSize: '200% 200%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontWeight: 900,
    letterSpacing: '3px',
    textTransform: 'uppercase',
}));

const DecorativeLine = styled(Box)(() => ({
    height: '2px',
    width: '100px',
    background: 'linear-gradient(90deg, transparent, rgba(100, 100, 120, 0.6), transparent)',
    margin: '20px auto',
    boxShadow: '0 0 10px rgba(80, 80, 100, 0.3)',
}));

const projects = [
    {
        title: 'Aerial Odyssey',
        description: 'Meu primeiro jogo com Python e Pygame, estilo FlappyBird, onde você controla um personagem que deve sobreviver em um ambiente perigoso.',
        image: '/src/assets/aerialodyssey1.jpg',
        tags: ['Python', 'Pygame', 'Game Development'],
        github: 'https://github.com/emilyestvz/project_aerial_odyssey',
        demo: '#',
    },
    {
        title: 'Vammo!',
        description: 'Projeto em equiope para Generation: Aplicativo de carona campartilhada com foco em sustentabilidade e economia colaborativa.',
        image: '/src/assets/vammo-img.png',
        tags: ['React', 'Node.js', 'MongoDB', 'Native', 'TypeScript'],
        github: 'https://github.com/projetointegrador-g3/vammo_react',
        demo: '#',
    },
    {
        title: 'Music Player Web',
        description: 'Aplicativo web de reprodução de música com playlists personalizadas e integração com APIs de música.',
        image: '/src/assets/music-player-img.png',
        tags: ['Javascript', 'HTML5', 'CSS3', 'Bootstrap', 'SweetAlert2', 'FontAwesome', 'MediaQuery'],
        github: 'https://github.com/emilyestvz/music_player_web',
        demo: 'https://emilyestvz.github.io/music_player_web/',
    },
    {
        title: 'City 3D',
        description: 'Modelo 3D interativo de uma cidade utilizando Three.js, permitindo navegação e visualização em 3D.',
        image: '/src/assets/city3d.png',
        tags: ['Three.js', 'JavaScript', 'WebGL', '3D Modeling'],
        github: 'https://github.com/emilyestvz/city-three.js',
        demo: 'https://emilyestvz.github.io/city-three.js/',
    },
    {
        title: 'Bot Telegram Bookster',
        description: 'Bot Telegram que recomenda livros com base em preferências do usuário, utilizando APIs externas para buscar informações sobre os livros.',
        image: '/src/assets/telegram.png',
        tags: ['Python', 'Google API', 'Telegram Bot API'],
        github: 'https://github.com/emilyestvz/bot-telegram',
        demo: '#',
    },
];

const Projects = () => {
    return (
        <StyledProjects id='projects'>
            <Container maxWidth='lg'>
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <SectionTitle variant='h2'>
                        Projects
                    </SectionTitle>
                    <DecorativeLine />
                </Box>

                <Box sx={{ 
                    display: 'flex',
                    overflowX: 'auto',
                    pt: 1,
                    pb: 4,
                    px: 4,
                    '&::-webkit-scrollbar': {
                        height: '8px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'rgba(100, 100, 120, 0.2)',
                        borderRadius: '4px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: 'rgba(150, 150, 170, 0.5)',
                        borderRadius: '4px',
                        '&:hover': {
                            background: 'rgba(180, 180, 200, 0.7)',
                        }
                    }
                }}>
                    {projects.map((project, index) => (
                        <Box key={index} sx={{ minWidth: '500px', flex: 'auto' }}>
                            <StyledCard>
                                <CardMedia
                                    component='img'
                                    height='200'
                                    image={project.image}
                                    alt={project.title}
                                    sx={{ 
                                        filter: 'grayscale(20%) brightness(0.8)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            filter: 'grayscale(0%) brightness(1)',
                                        }
                                    }}
                                />

                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography 
                                        gutterBottom 
                                        variant='h5' 
                                        component='h2'
                                        sx={{ color: 'rgba(200, 200, 220, 0.95)', fontWeight: 600 }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography 
                                        variant='body2' 
                                        paragraph
                                        sx={{ color: 'rgba(150, 150, 170, 0.7)' }}
                                    >
                                        {project.description}
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {project.tags.map((tag, i) => (
                                            <Chip 
                                                key={i} 
                                                label={tag} 
                                                size='small'
                                                sx={{
                                                    background: 'rgba(100, 100, 120, 0.2)',
                                                    color: 'rgba(180, 180, 200, 0.9)',
                                                    border: '1px solid rgba(100, 100, 120, 0.3)',
                                                    fontWeight: 500,
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </CardContent>
                                
                                <CardActions>
                                    <Button 
                                        size='small' 
                                        startIcon={<GitHubIcon />} 
                                        href={project.github}
                                        sx={{ 
                                            color: 'rgba(180, 180, 200, 0.8)',
                                            '&:hover': { color: '#ffffff' }
                                        }}
                                    >
                                        Código
                                    </Button>
                                    <Button 
                                        size='small' 
                                        startIcon={<LaunchIcon />} 
                                        href={project.demo}
                                        sx={{ 
                                            color: 'rgba(180, 180, 200, 0.8)',
                                            '&:hover': { color: '#ffffff' }
                                        }}
                                    >
                                        Demo
                                    </Button>
                                </CardActions>
                            </StyledCard>
                        </Box>
                    ))}
                </Box>
            </Container>
        </StyledProjects>
    );
};
export default Projects;