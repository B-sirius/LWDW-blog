import Head from 'next/head';
import postMap from 'postMap.json';
import fse from 'fs-extra';
import matter from 'gray-matter';
import path from 'path';
import styled, { ThemeProvider } from 'styled-components';
import StyledDialogBox from 'components/DialogBox';
import FitDialogBox from 'components/FitDialogBox';
import Root from 'components/Root';
import RootContainer from 'components/RootContainer';
import Nav from 'components/Nav';
import MarkdownWrapper from 'components/MarkdownWrapper';
import Comment from 'components/Comment';
import theme from 'theme';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { rehype } from 'rehype';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';
import rehypeExternalLinks from 'rehype-external-links';
import 'prism-themes/themes/prism-vsc-dark-plus.min.css';

const markdownToHtml = async (markdown: string) => {
    const html = await remark()
        .use(remarkHtml, { sanitize: false })
        .process(markdown);

    const processedHtml = await rehype()
        .use(rehypePrism)
        .use(rehypeSlug)
        .use(rehypeExternalLinks, {
            target: '_blank',
        })
        .process(html.toString());

    return processedHtml.toString();
};

const postsDirPath = path.join(process.cwd(), '_posts');

export async function getStaticPaths() {
    return {
        paths: Object.keys(postMap).map((id) => ({
            params: { id },
        })),
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { id } = context.params;
    const { name, title, date, description } = postMap[id];
    const mdData = await fse.readFile(`${postsDirPath}/${name}`);
    const { content: mdText } = matter(mdData);
    const htmlText = await markdownToHtml(mdText);
    return {
        props: {
            id,
            title,
            date,
            htmlText,
            description,
        },
    };
}

const TitleContainer = styled.div`
    padding: 0px 20px 10px;

    @media only screen and (max-width: 500px) {
        padding: 0 5px 10px;
    }
`;

const MarkdownContainer = styled.div`
    padding: 20px 20px;

    @media only screen and (max-width: 500px) {
        padding: 5px 5px;
    }
`;

const Title = styled.div`
    font-size: 40px;
    color: var(--font-highlight-color);
    margin-bottom: 5px;
`;

const Time = styled.div`
    font-family: monospace;
    font-size: 14px;
`;

type PostType = {
    htmlText: string;
    date: string;
    title: string;
    description: string;
};

const Post = (props: PostType) => {
    const { htmlText, date, title, description } = props;

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <meta name="description" content={title} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
            </Head>
            <Root>
                <RootContainer>
                    <Nav />
                    <FitDialogBox>
                        <TitleContainer>
                            <Title>{title}</Title>
                            <Time>Posted on {date}</Time>
                        </TitleContainer>
                    </FitDialogBox>
                    <StyledDialogBox>
                        <MarkdownContainer>
                            <MarkdownWrapper>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: htmlText,
                                    }}
                                />
                            </MarkdownWrapper>
                        </MarkdownContainer>
                    </StyledDialogBox>
                    <Comment />
                </RootContainer>
            </Root>
        </ThemeProvider>
    );
};

export default Post;
