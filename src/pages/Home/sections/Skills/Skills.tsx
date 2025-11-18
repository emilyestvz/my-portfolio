import { Container, Box, Typography, Chip, styled } from '@mui/material';

const StyledSkills = styled('div')(() => ({
    background: 'linear-gradient(135deg, #8f8f9dff 0%, #a8a8b1ff 50%, #18181d 100%)',
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
        backgroundImage: `radial-gradient(circle at 70% 60%, rgba(0, 0, 0, 0.1) 0%, transparent 50%)`,
        pointerEvents: 'none',
    }
}));

const SectionTitle = styled(Typography)(() => ({
    background: 'linear-gradient(135deg, #040404ff 0%, #35353bff 50%, #414145ff 100%)',
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
    background: 'linear-gradient(90deg, transparent, rgba(7, 7, 16, 0.6), transparent)',
    margin: '20px auto',
    boxShadow: '0 0 10px rgba(80, 80, 100, 0.3)',
}));

const skills = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python',
    'MongoDB', 'PostgreSQL', 'MySQL',  'AWS',
    'Git', 'Material-UI', 'Next.js', 'Express', 'FastAPI', 'Flask', 'C#', 'SQL',
    'REST API', 'GraphQL', 'Jest', 'CI/CD', 'SCRUM', 'Agile Methodologies'
];

const Skills = () => {
    return (
        <StyledSkills id="skills">
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <SectionTitle variant="h2">
                        Skills
                    </SectionTitle>
                    <DecorativeLine />
                </Box>

                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 2.5,
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
                                color: 'rgba(223, 223, 230, 0.95)',
                                border: '1px solid rgba(126, 126, 137, 0.3)',
                                fontWeight: 600,
                                letterSpacing: '0.5px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    background: 'rgba(16, 16, 17, 0.2)',
                                    border: '1px solid rgba(120, 120, 140, 0.5)',
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 4px 20px rgba(68, 68, 73, 0.4)',
                                }
                            }}
                        />
                    ))}
                </Box>
            </Container>
        </StyledSkills>
    );
};

export default Skills;