import { useEffect, useState } from 'react';
import Head from 'next/head';
import postMap from 'postMap.json';
import fse from 'fs-extra';
import matter from 'gray-matter';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import styled, { ThemeProvider } from 'styled-components';
import StyledDialogBox from 'components/DialogBox';
import FitDialogBox from 'components/FitDialogBox';
import Root from 'components/Root';
import RootContainer from 'components/RootContainer';
import Nav from 'components/Nav';
import MarkdownWrapper from 'components/MarkdownWrapper';
import Comment from 'components/Comment';
import theme from 'theme';
import rehypeRaw from 'rehype-raw';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

const postsDirPath = path.join(process.cwd(), '_posts');

export async function getStaticPaths() {
    return {
        paths: Object.keys(postMap).map(id => ({
            params: { id }
        })),  
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { id } = context.params;
    const { name, title, date, description } = postMap[id];
    const mdData = await fse.readFile(`${postsDirPath}/${name}`);
    const { content: mdText } = matter(mdData);
    return {
        props: {
            id,
            title,
            date,
            mdText,
            description
        }
    }
}

const TitleContainer = styled.div`
    padding: 0px 20px 10px;
    
    @media only screen 
            and (max-width: 500px) {
                padding: 0 5px 10px;
            }
`;

const MarkdownContainer = styled.div`
    padding: 20px 20px;

    @media only screen 
        and (max-width: 500px) {
            padding: 5px 5px;
        }
`

const Title = styled.div`
    font-size: 40px;
    color: var(--font-highlight-color);
    margin-bottom: 5px;
`;

const Time = styled.div`
    font-family: monospace;
    font-size: 14px;
`;

// 生成锚点
const generateAnchorPoint = (string: string) => {
    let str = string.replace(/^\s+|\s+$/g, "");
    str = str.toLowerCase();
    str = str
        .replace(/[.|/|?|，|？|。|、|“|”]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");

    return str;
};

const reactMarkdownComponents = {
    code({ inline = null, className = '', children, ...props }) {
        const match = /language-(\w+)/.exec(className);
        return !inline && match ? (
            <SyntaxHighlighter
                language={match[1]}
                style={vscDarkPlus}
                {...props}
            >
                {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        );
    },
    h2: ({ ...props }) => (
        <h2 id={generateAnchorPoint(props.children[0])} {...props}></h2>
    ),
    h3: ({ ...props }) => (
        <h3 id={generateAnchorPoint(props.children[0])} {...props}></h3>
    ),
    h4: ({ ...props }) => (
        <h3 id={generateAnchorPoint(props.children[0])} {...props}></h3>
    ),
    a: ({ children, href = null }) => {
        if (href[0] !== '#') {
            return (
                <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
            )
        }
        return (
            <a href={href}>{children}</a>
        )
    }
}

type PostType = {
    mdText: string,
    date: string,
    title: string,
    description: string
};

const Post = (props: PostType) => {
    const { mdText, date, title, description } = props;
    const [renderedMd, setRenderedMd] = useState(null);

    // ReactMarkdown这部分的渲染一定要在客户端进行，所以我们将其放在useEffect中
    useEffect(() => {
        setRenderedMd(
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={reactMarkdownComponents}>
                {mdText}
            </ReactMarkdown>
        )
    }, [mdText]);

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
                            <Title>
                                {title}
                            </Title>
                            <Time>
                                Posted on {date}
                            </Time>
                        </TitleContainer>
                    </FitDialogBox>
                    <StyledDialogBox>
                        <MarkdownContainer>
                            <MarkdownWrapper>
                                {renderedMd}
                            </MarkdownWrapper>
                        </MarkdownContainer>
                    </StyledDialogBox>
                    <Comment />
                </RootContainer>
            </Root>
        </ThemeProvider>
    )
}

export default Post;