import { Container, Box, Typography, Chip, Paper, styled } from '@mui/material';

const StyledSkills = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(8, 0),
}));

const skills = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python',
    'MongoDB', 'PostgreSQL', 'MySQL', 'Docker', 'AWS',
    'Git', 'Material-UI', 'Redux', 'Next.js', 'Express',
    'REST API', 'GraphQL', 'Jest', 'CI/CD', 'Agile'
];

const Skills = () => {
    return (
        <StyledSkills>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h2" gutterBottom color="primary.contrastText">
                        Habilidades
                    </Typography>
                    <Typography variant="h6" color="primary.contrastText">
                        Tecnologias e ferramentas que domino
                    </Typography>
                </Box>

                <Paper 
                    elevation={3} 
                    sx={{ 
                        p: 4, 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: 2,
                        justifyContent: 'center'
                    }}
                >
                    {skills.map((skill, index) => (
                        <Chip
                            key={index}
                            label={skill}
                            color="primary"
                            sx={{ 
                                fontSize: '1rem', 
                                py: 2.5,
                                px: 1
                            }}
                        />
                    ))}
                </Paper>
            </Container>
        </StyledSkills>
    );
};

export default Skills;