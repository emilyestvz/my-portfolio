
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Chip, Button, Box, styled } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const StyledProjects = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    padding: theme.spacing(8, 0),
}));

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-8px)',
    },
}));

const projects = [
    {
        title: 'Aerial Odyssey',
        description: 'Meu primeiro jogo com Python e Pygame, estilo FlappyBird, onde você controla um personagem que deve sobreviver em um ambiente perigoso.',
        image: '/src/assets/video-aerial.mp4',
        tags: ['Python', 'Pygame', 'Game Development'],
        github: 'https://github.com/emilyestvz/project_aerial_odyssey',
        demo: '#',
    },
    {
        title: 'Vammo!',
        description: 'Projeto para Generation: Aplicativo de carona campartilhada com foco em sustentabilidade e economia colaborativa.',
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
        description: 'Clone de rede social com feed, stories, mensagens e notificações em tempo real.',
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
        <StyledProjects>
            <Container maxWidth='lg'>
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant='h2' gutterBottom>
                        Meus Projetos
                    </Typography>
                    <Typography variant='h6' color='text.secondary'>
                        Confira alguns dos projetos que desenvolvi
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <StyledCard>
                                <CardMedia
                                    component='img'
                                    height='200'
                                    image={project.image}
                                    alt={project.title}
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant='h5' component='h2'>
                                        {project.title}
                                    </Typography>
                                    <Typography variant='body2' color='text.secondary' paragraph>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {project.tags.map((tag, i) => (
                                            <Chip 
                                                key={i} 
                                                label={tag} 
                                                size='small' 
                                                color='primary' 
                                                variant='outlined' 
                                            />
                                        ))}
                                    </Box>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        size='small' 
                                        startIcon={<GitHubIcon />} 
                                        href={project.github}
                                    >
                                        Código
                                    </Button>
                                    <Button 
                                        size='small' 
                                        startIcon={<LaunchIcon />} 
                                        href={project.demo}
                                    >
                                        Demo
                                    </Button>
                                </CardActions>
                            </StyledCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledProjects>
    );
};

export default Projects;