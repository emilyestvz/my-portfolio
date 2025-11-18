
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
        title: 'E-commerce Platform',
        description: 'Plataforma completa de e-commerce com carrinho, pagamento e painel administrativo.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=250&fit=crop',
        tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        github: '#',
        demo: '#',
    },
    {
        title: 'Dashboard Analytics',
        description: 'Dashboard interativo com gráficos e métricas em tempo real para análise de dados.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
        tags: ['React', 'D3.js', 'Material-UI', 'Firebase'],
        github: '#',
        demo: '#',
    },
    {
        title: 'Task Management App',
        description: 'Aplicativo de gerenciamento de tarefas com funcionalidade drag-and-drop.',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop',
        tags: ['React', 'TypeScript', 'Redux', 'Tailwind'],
        github: '#',
        demo: '#',
    },
    {
        title: 'Social Media Clone',
        description: 'Clone de rede social com feed, stories, mensagens e notificações em tempo real.',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop',
        tags: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
        github: '#',
        demo: '#',
    },
    {
        title: 'Weather App',
        description: 'Aplicativo de clima com previsões detalhadas e mapas interativos.',
        image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=250&fit=crop',
        tags: ['React', 'API Integration', 'Chart.js', 'Geolocation'],
        github: '#',
        demo: '#',
    },
    {
        title: 'Portfolio CMS',
        description: 'Sistema de gerenciamento de conteúdo para portfólios criativos.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
        tags: ['React', 'Next.js', 'Sanity', 'Vercel'],
        github: '#',
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