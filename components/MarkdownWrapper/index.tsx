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
            font-size: 30px;
            margin-top: 50px;
            margin-bottom: 0;
            text-shadow: var(--md-title-shadow);
            color: var(--md-title-color);
        }
        h3 {
            font-size: 26px;
            margin-bottom: 0;
            color: var(--md-sub-title-color);
        }
        h4,h5,h6 {
            font-size: 24px;
            color: var(--md-sub-title-color);
        }
        p, li {
            margin-bottom: 2em;
        }
        p, li, a {
            font-size: 18px;
            line-height: 32px;
        }
        a {
            color: var(--md-link-color);
        }
        img {
            max-width: 100%;
        }
        hr {
            border-color: #111;
        }
        blockquote {
            border-left: 5px solid rgb(52, 57, 59);
            background-color: rgb(54, 0, 0);
            margin: 0;
            padding: 1em 1.5em 1em 2em;
            p, li {
                margin: 0;
            }
        }

        code {
            font-size: 16.5px;
            background-color: rgba(115, 125, 140, 0.17);
            padding: 4.5px 6px;
            border-radius: 3px;
        }

        pre code {
            background-color: transparent;
            padding: 0;
            border-radius: none;
        }

        @media only screen 
            and (max-width: 500px) {
                p, li, a {
                    font-size: 16px;
                    line-height: 30px;
                }
                code {
                    font-size: 14px;
                }
            }
    }
`;

export default MarkdownWrapper;