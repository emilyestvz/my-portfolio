// AboutSkills.tsx (novo arquivo combinado)
import { Container, Box, Typography, Grid, Chip, styled } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const StyledAbout = styled('div')(() => ({
    background: 'linear-gradient(135deg, #b9b9baff 0%, #7a7a7dff 50%, #898989ff 100%)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '80px 0',
    position: 'relative',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 40% 30%, rgba(60, 60, 80, 0.1) 0%, transparent 50%)`,
        pointerEvents: 'none',
    }
}));

const SectionTitle = styled(Typography)(() => ({
    background: 'linear-gradient(135deg, #020204ff 0%, #2e2e2fff 50%, #1f1f21ff 100%)',
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
    background: 'linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.6), transparent)',
    margin: '20px auto',
    boxShadow: '0 0 10px rgba(80, 80, 100, 0.3)',
}));

const skills = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Flask', 'C#',
    'MongoDB', 'PostgreSQL', 'MySQL', 'SQL', 'AWS', 'Three.js',
    'Git', 'Material-UI', 'Next.js', 'Express',
    'REST API', 'GraphQL', 'Jest', 'Metodologias Ágeis', 'SCRUM'
];

const AboutSkills = () => {
    return (
        <StyledAbout id='about'>
            <Container maxWidth='lg'>
                {/* SEÇÃO ABOUT */}
                <Box sx={{ textAlign: 'center', mb: 0 }}>
                    <SectionTitle variant='h2'>
                        About Me
                    </SectionTitle>
                    <DecorativeLine />
                </Box>

                <Box 
                    sx={{ 
                        p: 5, 
                        mb: 0,
                        textAlign: 'justify',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '16px',
                    }}
                >
                    <Typography variant='body1' paragraph sx={{ color: 'rgba(3, 1, 1, 0.9)', fontSize: '1.2rem', lineHeight: 1.8 }}>
                        Atualmente em transição de carreira para a área de tecnologia, graduando em Engenharia de Software e 
                        busco oportunidades para aplicar minhas habilidades em desenvolvimento FullStack utilizando stacks modernas. 
                        Minha vivência internacional na Espanha contribuiu para o desenvolvimento de competências como ﬂuência em espanhol, adaptabilidade e trabalho em equipe, além do aperfeiçoamento do inglês. 
                    </Typography>
                    <Typography variant='body1' paragraph sx={{ color: 'rgba(3, 1, 1, 0.9)', fontSize: '1.2rem', lineHeight: 1.8 }}>
                        Tenho foco em criar soluções inovadoras e centradas no usuário, 
                        seguindo metodologias ágeis com habilidades fortes em comunicação e trabalho em equipe, agregando valor e promovendo resultados de impacto.
                    </Typography>
                </Box>

                    {/* Linha do tempo*/}
                <Box sx={{ 
                display: 'flex', 
                gap: 6,
                justifyContent: 'center',
                alignItems: 'flex-start',
                position: 'relative',
                flexWrap: 'wrap',
                py: 4,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: '30px',
                    left: '10%',
                    right: '10%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(100, 100, 120, 0.6), transparent)',
                    zIndex: 0
                }
            }}>
                {/* Card 1 - Experiência */}
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '250px',
                    zIndex: 1
                }}>
                    <Box sx={{ 
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '50%',
                        background: 'rgba(147, 147, 147, 0.8)',
                        border: '3px solid rgba(32, 32, 33, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            border: '3px solid rgba(180, 180, 200, 0.8)',
                            transform: 'scale(1.1)',
                            boxShadow: '0 0 20px rgba(100, 100, 120, 0.5)',
                        }
                    }}>
                        <CodeIcon sx={{ color: 'rgba(32, 32, 33, 0.9)', fontSize: 30 }} />
                    </Box>
                    <Typography variant="h5" sx={{ 
                        color: 'rgba(3, 1, 1, 0.9)', 
                        mb: 1,
                        fontWeight: 600,
                        textAlign: 'center'
                    }}>
                        Experiência
                    </Typography>
                    <Typography sx={{ 
                        color: 'rgba(3, 1, 1, 0.9)',
                        textAlign: 'center',
                        lineHeight: 1.6
                    }}>
                        2+ anos desenvolvendo soluções de automação, software e web completas com foco em qualidade e performance
                    </Typography>
                </Box>

                {/* Card 2 - Formação */}
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '250px',
                    zIndex: 1
                }}>
                    <Box sx={{ 
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '50%',
                        background: 'rgba(147, 147, 147, 0.8)',
                        border: '3px solid rgba(32, 32, 33, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            border: '3px solid rgba(180, 180, 200, 0.8)',
                            transform: 'scale(1.1)',
                            boxShadow: '0 0 20px rgba(100, 100, 120, 0.5)',
                        }
                    }}>
                        <SchoolIcon sx={{ color: 'rgba(32, 32, 33, 0.9)', fontSize: 30 }} />
                    </Box>
                    <Typography variant="h5" sx={{ 
                        color: 'rgba(3, 1, 1, 0.9)', 
                        mb: 1,
                        fontWeight: 600,
                        textAlign: 'center'
                    }}>
                        Formação
                    </Typography>
                    <Typography sx={{ 
                        color: 'rgba(3, 1, 1, 0.9)',
                        textAlign: 'center',
                        lineHeight: 1.6
                    }}>
                        Graduação em Engenharia de Software pela UNICV
                    </Typography>
                </Box>

             {/* Card 3 - Projetos */}
                <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '250px',
                    zIndex: 1
                }}>
                    <Box sx={{ 
                        width: '60px', 
                        height: '60px', 
                        borderRadius: '50%',
                        background: 'rgba(147, 147, 147, 0.8)',
                        border: '3px solid rgba(32, 32, 33, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            border: '3px solid rgba(180, 180, 200, 0.8)',
                            transform: 'scale(1.1)',
                            boxShadow: '0 0 20px rgba(100, 100, 120, 0.5)',
                        }
                    }}>
                        <WorkIcon sx={{ color: 'rgba(32, 32, 33, 0.9)', fontSize: 30 }} />
                    </Box>
                    <Typography variant="h5" sx={{ 
                        color: 'rgba(3, 1, 1, 0.9)', 
                        mb: 1,
                        fontWeight: 600,
                        textAlign: 'center'
                    }}>
                        Projetos
                    </Typography>
                    <Typography sx={{ 
                        color: 'rgba(3, 1, 1, 0.9)',
                        textAlign: 'center',
                        lineHeight: 1.6
                    }}>
                        10+ projetos entregues com sucesso, desde e-commerce até dashboards analíticos complexos
                    </Typography>
                    </Box>
                </Box>


                {/* SEÇÃO SKILLS */}
                
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 1.5,
                        justifyContent: 'center',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}
                >
                    {skills.map((skill, index) => (
                        <Chip
                            key={index}
                            label={skill}
                            sx={{ 
                                fontSize: '1rem', 
                                py: 2.5,
                                px: 2,
                                background: 'rgba(0, 0, 0, 0.6)',
                                backdropFilter: 'blur(10px)',
                                color: 'rgba(202, 202, 207, 0.95)',
                                border: '1px solid rgba(54, 54, 57, 0.3)',
                                fontWeight: 600,
                                letterSpacing: '0.5px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    background: 'rgba(30, 30, 31, 0.2)',
                                    border: '1px solid rgba(120, 120, 140, 0.5)',
                                    color: 'rgba(39, 38, 38, 0.95)',
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 4px 20px rgba(60, 60, 80, 0.4)',
                                }
                            }}
                        />
                    ))}
                </Box>
            </Container>
        </StyledAbout>
    );
};

export default AboutSkills;