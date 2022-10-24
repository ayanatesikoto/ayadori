import styled, { keyframes } from 'styled-components'
import pictureOfAya from './assets/aya.png'
import ayaKid from './assets/ayakid.png'
import dogAndAya from './assets/dog-and-me.png'
import tree from './assets/tree.png'
import tigerAndMe from './assets/tiger-and-me.png'
import komainu from './assets/komainu.png'
import { openResume, openSkills } from '../router/thunks/pageTransitions'
import { useTypedDispatch, useTypedSelector } from '../../hooks'
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { MOBILE } from '../../media'

type Props = {
  present: boolean,
}

const BookTitle = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: 'Kaisei Opti', serif;
  color: hsl(0deg 100% 98%);
  writing-mode: vertical-rl;
  text-orientation: upright;
  font-size: 1.4rem;
  margin: 0;
  border: 0;
  letter-spacing: 0.05rem;
  font-weight: 100;
  width: 5rem;
  justify-content: space-evenly;
`
const BookTitlePiece = styled.span`
  display: flex;
  padding-top: 2rem;
`
const Author = styled.span`
  margin-top: -1rem;
  letter-spacing: 0.2rem;
  display: flex;
  align-items: center;
`
const Iro = styled.span`
  transform: rotate(8deg);
  display: flex;
  align-items: center;
  /* font-size: 1.6rem; */
`
const Iro2 = styled.span`
  transform: rotate(-8deg);
  background: linear-gradient(hsl(359deg 100% 91%),hsl(201deg 100% 94%));
  color: rgba(0,0,0,0);
  -webkit-background-clip: text;
  background-clip: text;
`
const Iro3 = styled.span`
`
const Dori = styled.span`
`
const TopRoot = styled.div<{display: string}>`
  flex-grow: 1;
  display: ${({ display }) => display};
  height: 100%;
  width: 100%;
  min-width: 100%;
  overflow: auto;
  justify-content: center;
`
const Paragraph = styled.p`
  margin: 0;
  font-size: 1.3ch;
  font-family: 'Klee One', cursive;
  font-weight: 400;
  line-height: 1.78ch;
  color: hsl(313deg 46% 5%);
  writing-mode: vertical-rl;
  text-orientation: upright;
	word-break: break-all;
  overflow-wrap: break-word;
  padding: 0.6rem;
  box-sizing: border-box;
  max-width: 100%;
  @media ${MOBILE} {
    font-weight: 600;
    font-size: 1.3ch;
    line-height: 1.7ch;
  }
`
const Title = styled.span`
  font-family: 'Yomogi', cursive;
  writing-mode: vertical-rl;
  font-weight: bold;
  font-size: 0.875rem;
  padding: 0.3rem 0 0 0;
  box-sizing: border-box;
`
const Article = styled.article`
  position: relative;
  flex-basis: 0;
  flex-grow: 1;
  width: 100%;
  display: grid;
  grid-template-areas: 'frameA plateA'
                       'plateB frameB';
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  overflow-y: auto;
  overflow-x: hidden;
  @media ${MOBILE} {
    display: flex;
    flex-wrap: wrap;
    
    width: 100%;
    scroll-snap-type: y proximity;
    overflow: scroll;
  }
`
const FrontCover = styled.section`
  display: none;
  justify-content: center;
  align-items: center;
  max-height: 50%;
  min-height: 50%;
  width: 100%;
  overflow: hidden;
  background-color: hwb(0deg 34% 30%);
  scroll-snap-align: start;
  @media ${MOBILE} {
    display: flex;  
  }
`
const PlateA = styled.section`
  grid-area: plateA;
  display: flex;
  justify-content: center;
  padding: 0.8rem 0 0.8rem 0.8rem;

  @media ${MOBILE} {
    max-height: 50%;
    min-height: 50%;
    width: 100%;
    display: flex;
    justify-content: end;
    padding: 0.6rem;
    box-sizing: border-box;
    scroll-snap-align: start;
  }
  
`
const FrameA = styled.section`
  grid-area: frameA;
  position: relative;

  @media ${MOBILE} {
    max-height: 50%;
    min-height: 50%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    padding: 0.6rem;
    box-sizing: border-box;
    scroll-snap-align: start;    
  }

`
const PlateB = styled.section`
  grid-area: plateB;
  display: flex;
  justify-content: end;
  padding: 0.8rem 0 0.8rem 0.8rem;

  @media ${MOBILE} {
    max-height: 50%;
    min-height: 50%;
    width: 100%;
    display: flex;
    justify-content: end;
    padding: 0.6rem 1rem 0.6rem 0.6rem;
    box-sizing: border-box;
    scroll-snap-align: start; 
  }
`
const FrameB = styled.section`
  grid-area: frameB;
  padding: 1rem;

  @media ${MOBILE} {
    max-height: 50%;
    min-height: 50%;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.6rem; 
    box-sizing: border-box;
    scroll-snap-align: start;
  }
`
const PictureFrame = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
`
const Mask = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  clip-path: inset(1rem round 1rem);
  box-shadow: 0 0 0.2rem 1.2rem hsl(0deg 0% 100%) inset;
  border: 1rem solid hsl(0deg 0% 100%);
  box-sizing: border-box;
`
const PictureOfAya = styled.div`
  position: relative;
  background-image: url(${pictureOfAya});
  background-repeat: no-repeat;
  background-size: 45rem;
  background-position: top -4rem right -7.2rem;
  filter: saturate(0.9);
  background-attachment: local;
  flex-grow: 1;
  box-sizing: border-box;
  height: 100%;
  clip-path: inset(1rem round 1rem);
`
const FunButton = styled.button`
  all: unset;
  position: relative;
  cursor: pointer;
`
const Blinking = keyframes`
  0%,100% { 
    color: hsl(29deg 100% 52%);
    -webkit-text-stroke-color: hsl(344, 84%, 41%);
  }
  50% {
    color: hsl(50deg 100% 52%);
    -webkit-text-stroke-color: hsl(50deg 100% 52%);
  }
`
const LinkIcon = styled.span`
    color: hsl(29deg 100% 52%);
    font-family: 'Noto Emoji',sans-serif;
    position: absolute;
    top: -0.62rem;
    margin-left: 0.918rem;
    font-weight: 700;
    font-size: 0.563rem;
    -webkit-text-stroke-color: hsl(344, 84%, 41%);
    -webkit-text-stroke-width: 0.04rem;
    transform: rotate(160deg);
    animation: ${Blinking} 2s linear infinite;
    animation-delay: 3s;
    text-orientation: mixed;
`
const FunButtonText = styled.a`
    font-family: 'Yomogi',cursive;
    color: hsl(329deg 91% 35%);
    font-size: 0.927rem;
    writing-mode: vertical-rl;
    color: hsl(0deg 52% 55%);
    border-radius: 30rem;
    font-weight: 700;
`
const AyaKid= styled.div`
  background-image: url(${ayaKid});
  background-repeat: no-repeat;
  background-size: contain;
  height: 5.42rem;
  width: 2.81rem; //281x542
  position: absolute;
  bottom: 0rem;
  right: 1.4rem;
  transform: rotate(6deg) scale(2);
  transform-origin: right bottom;
  filter: drop-shadow(1px 1px 2px hsl(0, 0%, 80%));
`
const Tree = styled.div`
  background-image: url(${tree});
  background-repeat: no-repeat;
  background-size: contain;
  height:11.26rem;
  width: 10.14rem; //914x1026
  position: absolute;
  left: 8rem;
  bottom: 0rem;
  transform: rotate(3deg);
  transform-origin: right bottom;
  filter: drop-shadow(1px 1px 2px hsl(0, 0%, 80%));
`
const TigerAndMe = styled.div`
  background-image: url(${tigerAndMe});
  background-repeat: no-repeat;
  background-size: contain;
  height: 10.71rem;
  width: 6.33rem; //433x871
  position: absolute;
  right: 0rem;
  top: 0rem;
  transform: rotate(-13deg);
  transform-origin: right bottom;
  filter: drop-shadow(1px 1px 2px hsl(0, 0%, 80%));
`
const DogAndAya = styled.div`
  background-image: url(${dogAndAya});
  background-repeat: no-repeat;
  background-size: contain;
  height: 7.95rem;
  width: 8.61rem; //795x861
  position: absolute;
  left: 1rem;
  top: 1rem;
  filter: drop-shadow(1px 1px 2px hsl(0, 0%, 80%));
`
const Komainu = styled.div`
  background-image: url(${komainu});
  background-repeat: no-repeat;
  background-size: contain;
  height: 7.46rem;
  width: 8.20rem; //746x820
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  filter: drop-shadow(1px 1px 2px hsl(0, 0%, 80%));
`

const Top = (props: Props) => {

  const typedDispatch = useTypedDispatch()

  return (
    <TopRoot display={props.present ? 'flex' : 'none'}>
    
      <Article>
        <FrontCover>
          <BookTitle>
            <Author>友田彩の</Author>
            <BookTitlePiece>
              <Iro>色</Iro>どり<Iro2>彩</Iro2>とり<Iro3>色</Iro3>とり<Dori>鳥</Dori>
            </BookTitlePiece>
          </BookTitle>
        </FrontCover>

        <PlateA>
          <Paragraph>
            <Title>佐賀の人が歩いた後は草も生えぬ</Title>
            <br/><br/>
            これは私が小学生の頃、先生から聞かされた、地元の佐賀の人を言い表したものです。<br/>
            <br/>
            「江戸の終わり頃。佐賀の人は学問のため、節約していた。だから、道の草さえも持っていってしまう。そういった逸話が未だに、県民性を表す言葉として使われているんだ。倹約家で勤勉。だが流石に草さえも、持っていくほど、節約しなくても。という、まあ、融通が効かない人、だという意味だ。」<br/>
            <br/>
            先生の言葉だったような気がします。逸話は改変こうして改変されていくのですね。そんな逸話を聞いて、
            だった私は、欲深い人たちだったんだなあ。草さえも欲しがるなんて。そう思いました。昔の人は節約していた。それを欲深いと思う。少し捻くれた子供です。
          </Paragraph>
        </PlateA>

        <FrameA>
          <Komainu />
          <TigerAndMe/>
          <Tree/>
          <DogAndAya/>
          <AyaKid/>
        </FrameA>

        <PlateB>
          <Paragraph>
            時はたち、今もまだ、変わらない私がいます。<br/>
            県民性に抗うように、いろんなことを求めます。<br/>
            スマホ、洋服、古文書、ペット、そして家の中にあふれてるもの、もの、もの！読書、イラスト、3Dモデル、史学、
            <FunButton onClick={ () => typedDispatch(openSkills()) }>
              <LinkIcon>🔺</LinkIcon>
              <FunButtonText>プログラミング</FunButtonText>
            </FunButton>
            。色々なことへの興味もつきません。<br/>
            それでもゲームを１つ買うのにも、何ヶ月も検討してしまうくらいケチなところも変わらない。きっと私は、変えたくないのでしょう。<br/>
            佐賀には、有史以前からの歴史の面影が残っています。古い言葉も地名も残っています。幕末は二重鎖国といって、他藩との交流を断つほど保守的でもありました。草も生えぬ。きっと、そんな言い草も、良い草として残してしまうくらい、地元の文化に誇りを持っているのだと思います。<br/>
            <br/>
            佐賀県には興味がなくとも、私には興味があったりしませんか？<br/>
            ここに詳しい
            <FunButton onClick={ () => typedDispatch(openResume()) }>
              <LinkIcon>🔺</LinkIcon>
              <FunButtonText>経歴</FunButtonText>
            </FunButton>
            が書いてあります。<br/>
          </Paragraph>
        </PlateB>   

        <FrameB>
          <PictureFrame>
            <PictureOfAya />
            <Mask/>
          </PictureFrame>
        </FrameB>
        
      </Article> 

    </TopRoot>
  )
}
  
  export default Top