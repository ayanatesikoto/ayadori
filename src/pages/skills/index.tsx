import styled, { keyframes } from 'styled-components'
import birdImg from './assets/animated_bird.png'

const SkillsRoot = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 100%;
`
const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 50ch;
  padding: 0 2vh 5vh 2vh;
`
const MiniSection = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 50ch;
  padding: 0 1.5vh 4.2vh 1.5vh;
`
const Title = styled.h1 `
  display: flex;
  justify-content: center;
  font-family: 'Zen Maru Gothic', sans-serif;
  font-size: 2.3vh;
  color: hsl(0deg 5% 21%);
  font-weight: 500;
  padding: 10vh 0 4.6vh 0;
  margin: 0;
`
const SubTitle = styled.h2`
  display: flex;
  justify-content: center;
  font-family: 'Zen Maru Gothic', sans-serif;
  font-size: 1.8vh;
  color: hsl(0deg 5% 21%);
  font-weight: 500;
  padding: 0 0 1.5vh 0;
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
const Message = styled.section`
  display: flex;
  max-width: 40ch;
  line-height: 3vh;
  padding: 5.2vh 2vh 4vh 2vh;
  font-size: 1.5vh;
  font-family: 'Zen Maru Gothic', sans-serif;
  overflow-wrap: break-word;
  word-break: normal;
`

const DinkusBird = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  min-width: 100%;
  background-image: url(${birdImg});
  background-size: 20vh;
  background-repeat: no-repeat;
  background-position: center;
`


const Skills = () => {
  
  return (
    <SkillsRoot>
      <Message>
        テック業界に入門したのは２０１９年ですが、それ以前から会社のWEBサイトの開発などに携わっておりました。業界入りしてからは、OCRソフトウェアの開発などで、DjangoやFlaskのPythonベースのWEBアプリケーション開発を行っておりました。HTML+CSS+JSの画面UIと、Pythonでのバックエンド両方を経験しております。<br/>
        <br/>
        実業務以外ですと、Unityを使ってゲームを作ったり、それに使用するキャラクターの３DモデルをBlenderで作ったり、プログラミングに関わらず、形のあるものを作るのが好きです。ステンドグラス工作やアクアリウムの趣味などもそれに通じるものがあります。<br/>
        <br/>
        そういう趣向もあり、今は、フロントエンド開発の仕事に興味を持っております。もし、興味がありましたら、私のフロントエンドエンジニアリングの経験や思いについて、紹介しておりますので、そのままスクロールしてご覧ください。<br/>
        このWEBサイトのソースコードも、<a href={'https://github.com/ayanatesikoto/ayadori'}>Github</a>に公開してあるので、参考になるかと思います。
      </Message>

      <DinkusBird />

      <Title>フロントエンドエンジニアとしての私</Title>
      <Section>        
        <SubTitle>馴染みのあるフロントエンド技術</SubTitle>
          <Paragraph>
            <List>
              Node.js<br/>
              npm, Yarn<br/>
              React<br/>
              Redux<br/>
              TypeScript<br/>
              styled-components<br/>
              vite<br/>
              Visual Studio Code<br/>
              NVS、NVM
            </List>
          </Paragraph>
        </Section>

        <Section>  
          <SubTitle>個別に少し補足と蛇足</SubTitle>

          <MiniSection>
            <MiniTitle>React</MiniTitle>
            <Paragraph>
            会社で所属しているプロジェクトが変わり、WEBアプリケーション開発のフレームワークがDjangoからFlaskに変わった時期に、私はReactと出会いました。それは、フロントエンド開発なるものが、WEBアプリケーション開発という１つの概念から、独立して顕わになったときでもありました。バックエンドの片手間で改修していたWEBページを、１から自分で作らなければいけなくなったのです。Flaskにはそんな機能ないですからね。バックエンドの外で探すしかないわけです。私を助けてくれるフレームワークを。<br/>
  そんな感じで必然的にAPIをJSで叩いてデータを取得して表示するような、今となっては当たり前というか、少し古さも感じるくらいのSPAの基本の作法を、Reactを通じて学んでいきました。そして出来上がったものは、状態をあちこちのコンポーネントで不要に重複して持っていたり、無理やり他のコンポーネントの状態を変えようとしたりと、副作用だらけのソースコードです。<br/>
  とりあえず状態を一つにまとめようと、複数のコンポーネント化をすべてやめて、１つの大きなコンポーネントを作り、１つの大きな状態をグローバルで保持することにしました。これはなんだか、Reactを学ぶ傍らでよく聞く何かに似ているような気がしました。ここで、ようやく私はReactがUIを構築するライブラリにすぎず、それ単体でフロントエンド開発の設計を支えてくれるものではないことに気が付きました。また、ステートレスコンポーネントが重要視され初めていた時期でもあり、それも私の気付きに貢献してくれました。
            </Paragraph>
          </MiniSection>

          <MiniSection>
            <MiniTitle>Redux</MiniTitle>
            <Paragraph>
            私のReactへの勘違いもあり、Reduxが私のゴミみたいなソースコードを綺麗にしてくれるのかは、慎重にならざるを得ませんでした。いくつそれに関する記事を読んでも、私にはそれで何が解決するのかはわかっても、そうするしか方法はないのかという疑問が残っている状況でした。とりあえず、Reactが推奨しているFluxパターンに沿って、ほとんどReactだけを頼りに作ったプログラムを書き換える作業に入りました。その途中、何だかReduxのマネごとをしているような気持ちになり、そこでようやくReduxの回りくどく見えるアーキテクチャの必要性に気が付き、Reduxを採用するに至りました。<br/>
  Reduxは今も使っており、この私のWEBサイトでも使っていて、コードを公開しているのでよかったら見てくださ
  い。基本的にはre-ducksパターンをベースにしたコードの分け方にしていますが、どうあるべきかはまだまだ思案中です。何でもかんでもReduxで状態管理すればいいというものではなく、コンポーネントで解決できる状態はコンポーネントで持つべきということも、最近わかってきました。React-Reduxは実際のプロダクションで使っていましたが、Redux ToolKitを使うのはこのWEBサイトが初めてだったので、少し不慣れなところもまだあります。Hooks時代のあるべきアーキテクチャについても思案中で、Recoilも気になっているものの１つです。<br/>
            </Paragraph>
          </MiniSection>

          <MiniSection>
            <MiniTitle>TypeScript</MiniTitle>
            <Paragraph>
            静的型付けなんて他言語の作法くらいにしか意識していなかったですし、チームでPythonを書いていても、共通の命名規則でコードの安全性を担保していたので、TypeScriptを知るまでは静的型付けの重要性を理解していませんでした。要するに型などはランタイムの設計に関することであり、面と向かって私自身、考えるきっかけがなかったのです。<br/>
  今は、TypeScriptを通じてコードの安全性の面でも静的型付けの重要性を理解しておりますし、コードの可読性や利便性も実感しております。テストコードが書きにくいUIコンポーネントのコードの安全性に、ReactとTypeScriptが貢献していることも、実感しております。<br/>
  動的型付けな言語が嫌いというわけではありません。自然言語で例えてみましょう。日本語の文法の規則は、多言語と比較して、かなり自由です。それゆえ、表現に精確さを欠き、あいまいになりがちという脆弱性もあります。それゆえに、相手を察する労力を強いるし、しかしだからこそ、それは思いやりという形で労力以上の効果を生むことだってあります。Pythonをチームで使っていた頃のほうが、型のありがたみを知る前よりも、特に、書き方に気をつけようと言う意識が働いてた気がしますし、それは悪いことではなかったような気が今でもしています。
            </Paragraph>
          </MiniSection>

          <MiniSection>
            <MiniTitle>styled-components</MiniTitle>
            <Paragraph>
            CSS in JSは何も疑問を感じることなく、マイクロインタラクションから派手なアニメーションまで大好きな私にとっては、ただその利便性に浸っておりました。しかし、あまり凝ったデザインにコストをかけられるプロダクトに関わることができず、Theming機能を使うなどしてフル活用することはまだ出来ておりません。粒度の観点からのコンポーネントの設計にもスタイルは関わってくるので、私が直近でぶつかってみようと思う重要課題となっています。
  ついでに、コンポーネントの粒度の話もここでしたいと思います。<br/>
  最初は、Atomic Designに入門しましたが、作っている規模のアプリケーションに対し、不要なコンポーネントの細分化を感じました。しかし、その粒度を粗くしようと別のデザインを考えても、実装していく上での設計思想の一貫性に甘さが目立っていきました。結局のところ今は、初めはコンポーネント化せず、再利用の必要性を感じたら外出しする感じで追加していってます。わりと私が関わっていたプロダクトだと、これでうまく行きました。<br/>
            </Paragraph>
          </MiniSection>

          <MiniSection>
            <MiniTitle>vite</MiniTitle>
            <Paragraph>
            ああもう楽って感じです。あんまりこういうところで、苦労したくないですよね。<br/>
            すっかりviteに馴染んでしまったので、webpackも四苦八苦しながら設定ファイルをいじりました。まだまだ、現役で使われているプロダクトもあるでしょうから、機会があれば、微力ながらお力添えいたします。
            </Paragraph>
          </MiniSection>

        </Section>

    </SkillsRoot>
  )
}
  
export default Skills