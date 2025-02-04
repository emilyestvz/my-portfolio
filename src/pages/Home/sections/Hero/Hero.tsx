import { styled } from "@mui/material"

const Hero = () => {

    const StyledHero = styled('div')(() => ({
        backgroundColor: 'black'
    }))

    return (
     <>
        <StyledHero>
            hello
        </StyledHero>
     </>
    )
  }
  
  export default Hero