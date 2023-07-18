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
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import dynamic from 'next/dynamic';
import theme from 'styles/theme';
// add ids to headings.
import rehypeSlug from 'rehype-slug';
// highlight code blocks in HTML with prism.
import rehypePrism from '@mapbox/rehype-prism';
import 'prism-themes/themes/prism-vsc-dark-plus.min.css';

const commonComponents = {
    a: ({ href, children }) => (
        <a href={href} target="_blank" rel="noreferrer">
            {children}
        </a>
    ),
};

const customComponents = {
    Video: dynamic(() => import('components/Video')),
};

const postsDirPath = path.join(process.cwd(), '_posts');

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
    const { content } = matter(mdData);
    const mdxSource = await serialize(content, {
        mdxOptions: {
            rehypePlugins: [rehypeSlug, rehypePrism],
        },
    });

    const usedCustomComponentNames = Object.keys(customComponents)
        .map((name) => {
            const regex = new RegExp(`<${name}`);
            if (regex.test(content)) {
                return name;
            }
            return false;
        })
        .filter(Boolean) as string[];

    return {
        props: {
            id,
            title,
            date,
            mdxSource,
            description,
            usedCustomComponentNames,
        },
    };
}

type MDXRemoteProps = React.ComponentProps<typeof MDXRemote>;
type PostType = {
    mdxSource: MDXRemoteProps;
    date: string;
    title: string;
    description: string;
    usedCustomComponentNames: string[];
};
const Post = (props: PostType) => {
    const { mdxSource, date, title, description, usedCustomComponentNames } =
        props;
    const components = { ...commonComponents } as MDXRemoteProps['components'];
    for (const name of usedCustomComponentNames) {
        if (customComponents[name]) {
            components[name] = customComponents[name];
        }
    }

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
                                <MDXRemote
                                    {...mdxSource}
                                    components={components}
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
