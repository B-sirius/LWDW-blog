// 根容器，覆盖全屏
import styled from 'styled-components';

const RootWrapper = styled.div`
    --root-bg-color: ${({ theme }) => theme.rootBgColor};
    --dialog-bg-color: ${({ theme }) => theme.dialogBgColor};
    --dialog-border-color: ${({ theme }) => theme.dialogBorderColor};
    --font-color: ${({ theme }) => theme.fontColor};
    --font-highlight-color: ${({ theme }) => theme.fontHighlightColor};
    --nav-color: ${({ theme }) => theme.navColor};
    --blog-title-shadow: ${({ theme }) => theme.blogTitleShadow};
    --blog-hint-shadow: ${({ theme }) => theme.blogHintShadow};

    background-color: var(--root-bg-color);
    overflow: scroll;
    font-family: "Songti SC", "Source Serif Pro",serif;
    @media only screen 
        and (max-width: 500px) {
            font-family: "GillSans", "Helvetica Neue", Arial, Helvetica, sans-serif;
        }
`
const Root = ({ children }) => (
    <RootWrapper>
        {children}
    </RootWrapper>
)

export default Root;