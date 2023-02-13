import styled from "styled-components";

const Container = styled.div`
    font-family: monospace;
`;

const Name = styled.h1`
    font-size: 44px;
    margin-bottom: 0;
    text-shadow: var(--blog-title-shadow);
`
const Hint = styled.p`
    font-size: 12px;
    margin: 0;
    text-shadow: var(--blog-hint-shadow);
`

const BlogTitle = () => (
    <Container>
        <Name>LWDW!</Name>
        <Hint>Learn the work from doing the work🍺</Hint>
    </Container>
)

export default BlogTitle;