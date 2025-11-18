import { Container, Box, Typography, Paper, styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const StyledAbout = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(8, 0),
}));

const InfoCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    height: '100%',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-8px)',
    },
}));

const About = () => {
    return (
        <StyledAbout>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h2" gutterBottom>
                        Sobre Mim
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Conheça um pouco da minha trajetória
                    </Typography>
                </Box>

                <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
                    <Typography variant="body1" paragraph>
                        Sou desenvolvedora full stack com mais de 3 anos de experiência criando
                        aplicações web modernas e escaláveis. Tenho paixão por aprender novas
                        tecnologias e resolver problemas complexos através do código.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Minha expertise inclui desenvolvimento frontend com React e TypeScript,
                        backend com Node.js, e experiência com diversas bases de dados e
                        ferramentas de DevOps. Adoro trabalhar em equipe e contribuir para
                        projetos que fazem a diferença.
                    </Typography>
                    <Typography variant="body1">
                        Estou sempre em busca de novos desafios e oportunidades para crescer
                        profissionalmente e contribuir com projetos inovadores que impactem
                        positivamente a vida das pessoas.
                    </Typography>
                </Paper>
                <Grid container spacing={3}>
                    <Grid xs={12} md={4}>
                        <InfoCard elevation={2}>
                            <CodeIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                Experiência
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                3+ anos desenvolvendo soluções web completas com foco em
                                qualidade e performance
                            </Typography>
                        </InfoCard>
                    </Grid>

                    <Grid xs={12} md={4}>
                        <InfoCard elevation={2}>
                            <SchoolIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                Formação
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Graduação em Ciência da Computação e certificações em
                                desenvolvimento web moderno
                            </Typography>
                        </InfoCard>
                    </Grid>

                    <Grid xs={12} md={4}>
                        <InfoCard elevation={2}>
                            <WorkIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
                            <Typography variant="h5" gutterBottom>
                                Projetos
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                15+ projetos entregues com sucesso, desde e-commerce até
                                dashboards analíticos complexos
                            </Typography>
                        </InfoCard>
                    </Grid>
                </Grid>
            </Container>
        </StyledAbout>
    );
};

export default About;