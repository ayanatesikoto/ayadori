import styled, { keyframes } from 'styled-components'
import { MOBILE } from '../../media'

const ResumeRoot = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: auto;
  font-family: 'Zen Maru Gothic', sans-serif;
  font-weight: 400;
  overflow: hidden;
  overflow-y: auto;
`
const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: max-content;
  padding: 3rem 2rem 2rem 2rem;
  box-sizing: border-box;
  @media ${MOBILE} {
    width: 90vw;
    padding: 0;
    justify-content: center;
  }
`
const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  padding: 1rem 0 2.5rem 0;
`
const History = styled.div`
  display: grid;
  margin-right: 2rem;
  font-size: 0.8rem;
  grid-template-columns: max-content 100%;
  grid-template-rows: repeat(auto-fill, minmax(max-content, 100%));
  gap: 0 1rem;
  @media ${MOBILE} {
    grid-template-columns: max-content 14rem;
    margin-right: 0;
    font-size: 0.7rem;
    gap: 0 0rem; 
  }
`
const Period = styled.span`
  position: relative;
  font-weight: 500;
  height: max-content;
`
const SubPeriod = styled.span`
  position: relative;
  font-weight: 500;
  height: max-content;
  display: flex;
  justify-content: center;
  /* padding: 0.5rem 0; */
  margin: 0;
`
const Experience = styled.span`
  height: max-content;
  width: 100%;
`
const TimeLine = styled.span`
  width: 50%;
  display: flex;
  height: 3rem;
  border-right: 0.06rem solid black;
  box-sizing: border-box;
`
const Mirai = styled.span`
  width: 50%;
  display: flex;
  height: 3rem;
  border-right: 0.06rem solid black;
  box-sizing: border-box;
`
const Paragraph = styled.p`
  margin: 0;
  font-size: 1.5vh;
  line-height: 2.8vh;
  color: hsl(0deg 3% 3%);
  overflow-wrap: break-word;
  word-break: normal;
`
const Resume = () => {
  
  return (
    <ResumeRoot>
      <Section>
        <Title>友田彩の経歴</Title>
        <History>

          <Period>
            <SubPeriod>佐賀</SubPeriod>
            <TimeLine/>
          </Period>
          <Experience/>

          <Period>
            ２０１２年４月
            <TimeLine/>
          </Period>
          <Experience>株式会社艶にて、販売員を務める。</Experience>

          <Period>
            ２０１４年４月
            <TimeLine/>
          </Period>
          <Experience>はらだ歯科医院にて、受付事務を務める。</Experience>

          <Period>
            ２０１７年３月
            <TimeLine/>
            <SubPeriod>東京へ</SubPeriod>
            <TimeLine/>
          </Period>

          <Experience>株式会社 江口農園にて、経理職（役員）を務める。</Experience>

          <Period>
            ２０１９年１月
            <TimeLine/>
          </Period>
          <Experience>株式会社リーディングエッジにて、ソフトウェアエンジニアを務める。</Experience>

          <Period>
            ２０２１年１月
            <TimeLine/>
          </Period>
          <Experience>地元の歴史のフィールドワークに没頭する。</Experience>

          <Period>
            <SubPeriod>未来</SubPeriod>
            <TimeLine/>
          </Period>
          <Experience><b>年収５００万以上の会社に入社</b></Experience>

          <Period>
            <SubPeriod>幸せな日々を暮らす。</SubPeriod>
          </Period>

          <Experience/>

        </History>
      </Section>
    </ResumeRoot>
  )
}
  
export default Resume