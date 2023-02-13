// 定制markdown渲染样式
import styled from "styled-components";

const MarkdownWrapper = styled.div`
    --md-link-color: ${({ theme }) => theme.mdLinkColor};
    --md-title-shadow: ${({ theme }) => theme.mdTitleShadow};
    --md-title-color: ${({ theme }) => theme.mdTitleColor};
    --md-sub-title-color: ${({ theme }) => theme.mdSubTitleColor};
    --md-third-title-color: ${({ theme }) => theme.mdThirdTitleColor};

    & {
        h2 {
            font-size: 1.8em;
            margin-top: 50px;
            margin-bottom: 0;
            text-shadow: var(--md-title-shadow);
            color: var(--md-title-color);
        }
        h3 {
            font-size: 1.4em;
            margin-bottom: 0;
            color: var(--md-sub-title-color);
        }
        h4,h5,h6 {
            font-size: 1.2em;
            color: var(--md-sub-title-color);
        }
        p {
            font-size: 18px;
            line-height: 2;
        }
        a {
            color: var(--md-link-color);
        }
        img {
            width: 100%;
        }
        hr {
            border-color: #111;
        }

        @media only screen 
            and (max-width: 500px) {
                p {
                    font-size: 16px;
                    line-height: 1.5;
                }
            }
    }
`;

export default MarkdownWrapper;