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
        p {
            font-size: 22px;
            line-height: 1.5;
        }
        a {
            color: var(--md-link-color);
            font-size: 22px;
        }
        img {
            width: 100%;
        }
        hr {
            border-color: #111;
        }
        li {
            font-size: 22px;
        }

        code {
            font-size: 16.5px;
        }

        @media only screen 
            and (max-width: 500px) {
                p, li, a {
                    font-size: 20px;
                }
                code {
                    font-size: 14px;
                }
            }
    }
`;

export default MarkdownWrapper;