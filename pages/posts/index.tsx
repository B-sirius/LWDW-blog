// 博客的文章列表页
import Head from 'next/head';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Root from 'components/Root';
import RootContainer from 'components/RootContainer';
import DialogLink from 'components/DialogLink';
import Nav from 'components/Nav';
import getSortedPosts from 'utils/getSortedPosts';
import theme from 'theme';

const sortedPosts = getSortedPosts();

// 对话框样式的section
const HomeSection = styled(DialogLink)`
    margin-bottom: 40px;

    &:last-child {
        margin-bottom: 0;
    }
`

// 列表
const PostList = () => (
    <ThemeProvider theme={theme}>
        <Head>
            <meta name="description" content="LWDW的博客列表" />
            <meta property="og:title" content="LWDW的博客列表" />
            <meta property="og:description" content="LWDW的博客列表" />
        </Head>
        <Root>
            <RootContainer>
                <Nav activeIndex={1} />
                {sortedPosts.map((post) => {
                    const { date, title, id, description } = post;
                    return (
                        <HomeSection title={title} key={id} href={`/posts/${id}`}>
                            <p>[{date}]</p>
                            <p>{description}</p>
                        </HomeSection>
                    )
                })}
            </RootContainer>
        </Root>
    </ThemeProvider>
)

export default PostList;