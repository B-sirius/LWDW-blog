// 主页，一些介绍
import styled, { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import Root from 'components/Root';
import RootContainer from 'components/RootContainer';
import Nav from 'components/Nav';
import MarkdownWrapper from 'components/MarkdownWrapper';
import InboundLink from 'components/InboundLink';
import getSortedPosts from 'utils/getSortedPosts';
import Link from 'next/link';
import theme from 'styles/theme';

const Introduce = styled.p`
    font-size: 20px;
`;

const Space = () => <>&nbsp;&nbsp;</>;

const slicedSortedPosts = getSortedPosts().slice(0, 10);

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
                        Hi, I am Yi Zhou, Welcome to my blog🌖! I currently live
                        in Shanghai, China and work as a Software Developer.
                        <br />
                        Meanwhile, I am a video game fan 🎮 and loves books,
                        movies, music 👩🏻‍🎤. You can find me in
                        <InboundLink href="https://www.douban.com/people/121516026/">
                            {' '}
                            Douban{' '}
                        </InboundLink>
                        .
                    </Introduce>
                    <h2>最新博客</h2>
                    <ul>
                        {slicedSortedPosts.map((post) => {
                            const { title, id } = post;
                            return (
                                <li key={id}>
                                    <Link key={id} href={`/posts/${id}`}>
                                        {title}
                                    </Link>
                                </li>
                            );
                        })}
                        <li>
                            <Link href="/posts">更多...📚</Link>
                        </li>
                    </ul>
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
            </RootContainer>
        </Root>
    </ThemeProvider>
);

export default Home;
