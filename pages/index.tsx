// 主页，一些介绍
import styled, { ThemeProvider } from "styled-components";
import Head from "next/head";
import Image from 'next/image';
import Root from "components/Root";
import RootContainer from "components/RootContainer";
import StyledDialogBox from "components/DialogBox";
import Nav from 'components/Nav';
import MarkdownWrapper from 'components/MarkdownWrapper'
import InboundLink from "components/InboundLink";
import theme from "theme";

const Introduce = styled.p`
  font-size: 20px;
`

const IntroduceContainer = styled.div`
  padding-bottom: 30px;
`

const Gallary = styled(Image)`
  width: 100%;
  height: auto;
`

const FriendLinkContainer = styled.div`
  padding-top: 30px;
`

const Space = () => (<>&nbsp;&nbsp;</>);

const Home = () => (
  <ThemeProvider theme={theme}>
    <Head>
      <meta name="description" content="欢迎来到LWDW" />
      <meta property="og:title" content="LWDW" />
      <meta property="og:description" content="欢迎来到LWDW" />
    </Head>
    <Root>
      <RootContainer>
        <Nav activeIndex={0} />
        <IntroduceContainer>
          <Introduce>
            我是周易，欢迎！👋我是一名程序员，目前在中国上海生活工作。
          </Introduce>
          <Introduce>
            I am  Yi Zhou, Welcome! 👋 I currently live in Shanghai, China and work as a Software Developer.
          </Introduce>
        </IntroduceContainer>
        <StyledDialogBox>
          <Gallary
            src="https://s2.loli.net/2023/01/03/aLHyfVWIgjlCbkw.jpg"
            width={0}
            height={0}
            priority
            sizes="900px"
            alt="浙美意大利雕塑展-静谧的凝视" />
        </StyledDialogBox>
        <FriendLinkContainer>
          <MarkdownWrapper>
            <h2>友链</h2>
            <ul>
              <li>
                <InboundLink href="https://www.mochiko.cn/">阿糕家后院</InboundLink>
                <Space />
                一个正在翻修博客的人
              </li>
            </ul>
            <h2>推荐关注</h2>
            <ul>
              <li>
                <InboundLink href="https://www.joshwcomeau.com/">Josh Comeau</InboundLink>
                <Space />
                一个博客很漂亮的前端高手
              </li>
              <li>
                <InboundLink href="https://www.kawabangga.com/all-posts">卡瓦邦噶！</InboundLink>
                <Space />
                一个Python大佬
              </li>
            </ul>
          </MarkdownWrapper>
        </FriendLinkContainer>
      </RootContainer>
    </Root>
  </ThemeProvider>
)

export default Home;