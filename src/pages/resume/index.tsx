import styled, { keyframes } from 'styled-components'

const ResumeRoot = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: auto;
`
const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 50ch;
  padding: 0 3vh 5vh 3vh;
`
const MiniSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 50ch;
  padding: 0 3vh 2.2vh 3vh;
`
const Title = styled.h1 `
  display: flex;
  justify-content: center;
  font-family: 'Zen Maru Gothic', sans-serif;
  font-size: 2.3vh;
  color: hsl(0deg 5% 21%);
  font-weight: 500;
  padding: 6.2vh 0 4.6vh 0;
  margin: 0;
`
const SubTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-family: 'Zen Maru Gothic', sans-serif;
  font-size: 1.8vh;
  color: hsl(0deg 5% 21%);
  font-weight: 500;
  padding: 0 0 1vh 0;
  margin: 0;
`
const MiniTitle = styled.h3`
  display: flex;
  justify-content: center;
  font-family: 'Zen Maru Gothic', sans-serif;
  font-size: 1.7vh;
  color: hsl(0deg 5% 21%);
  font-weight: 500;
  margin: 0;
  padding-bottom: 1vh;
`
const List = styled.span`
  margin: 0;
  font-size: 1.6vh;
  font-family: 'Zen Maru Gothic', sans-serif;
  line-height: 2.75vh;
  color: hsl(0deg 3% 3%);
  display: flex;
  text-align: center;
  justify-content: center;
  font-weight: 400;
  line-height: 3vh;
`
const Paragraph = styled.p`
  margin: 0;
  font-size: 1.5vh;
  font-family: 'Zen Maru Gothic', sans-serif;
  line-height: 2.8vh;
  color: hsl(0deg 3% 3%);
`

const Resume = () => {
  
  return (
    <ResumeRoot>


    </ResumeRoot>
  )
}
  
export default Resume