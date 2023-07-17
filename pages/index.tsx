// 主页，一些介绍
import styled, { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import Root from 'components/Root';
import RootContainer from 'components/RootContainer';
import StyledDialogBox from 'components/DialogBox';
import Nav from 'components/Nav';
import MarkdownWrapper from 'components/MarkdownWrapper';
import InboundLink from 'components/InboundLink';
import theme from 'theme';

const Introduce = styled.p`
    font-size: 20px;
`;

const IntroduceContainer = styled.div`
    padding-bottom: 30px;
`;

const Gallary = styled(Image)`
    width: 100%;
    height: auto;
`;

const FriendLinkContainer = styled.div`
    padding-top: 30px;
`;

const Space = () => <>&nbsp;&nbsp;</>;

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
                    <MarkdownWrapper>
                        <Introduce>
                            你好，我是周易，欢迎来到我的博客🌖！我是一名程序员，目前在中国上海工作。
                            <br />
                            同时我也是一位游戏玩家🎮与书影音👩🏻‍🎤爱好者，偶尔活跃在
                            <InboundLink href="https://www.douban.com/people/121516026/">
                                豆瓣社区
                            </InboundLink>
                            。
                        </Introduce>
                        <Introduce>
                            Hi, I am Yi Zhou, Welcome to my blog🌖! I currently
                            live in Shanghai, China and work as a Software
                            Developer.
                            <br />
                            Meanwhile, I am a video game fan 🎮 and loves books,
                            movies, music 👩🏻‍🎤. You can find me in
                            <InboundLink href="https://www.douban.com/people/121516026/">
                                {' '}
                                Douban{' '}
                            </InboundLink>
                            .
                        </Introduce>
                    </MarkdownWrapper>
                </IntroduceContainer>
                <StyledDialogBox>
                    <Gallary
                        src="https://s2.loli.net/2023/02/14/WQKHhTE1cxsSZDt.jpg"
                        width={0}
                        height={0}
                        priority
                        sizes="900px"
                        alt="路过公交"
                    />
                </StyledDialogBox>
                <FriendLinkContainer>
                    <MarkdownWrapper>
                        <h2>友链</h2>
                        <ul>
                            <li>
                                <InboundLink href="https://www.mochiko.cn/">
                                    阿糕家后院
                                </InboundLink>
                                <Space />
                                一个正在翻修博客的人
                            </li>
                        </ul>
                        <h2>推荐关注</h2>
                        <ul>
                            <li>
                                <InboundLink href="https://www.joshwcomeau.com/">
                                    Josh Comeau
                                </InboundLink>
                                <Space />
                                一个博客很漂亮的前端高手
                            </li>
                            <li>
                                <InboundLink href="https://www.kawabangga.com/all-posts">
                                    卡瓦邦噶！
                                </InboundLink>
                                <Space />
                                一个Python大佬
                            </li>
                        </ul>
                    </MarkdownWrapper>
                </FriendLinkContainer>
            </RootContainer>
        </Root>
    </ThemeProvider>
);

export default Home;
