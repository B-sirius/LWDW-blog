import styled, { css } from 'styled-components';
import Link from 'next/link';
import BlogTitle from 'components/BlogTitle';
import InboundLink from 'components/InboundLink';

const LINKS = [
    ['Home', '/'],
    ['Posts', '/posts'],
    ['Github', 'https://github.com/B-sirius', true],
    ['RSS', 'https://b-sirius.github.io/rss.xml', true],
];

const LinkContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
`

const Container = styled.div`
    margin-bottom: 50px;
`

const linkStyle = css`
    padding: 5px 0;
    font-family: monospace;
    color: ${(props) => (props.$actived ? 'var(--nav-color)' : 'var(--font-color)')};
    font-size: 20px;
    margin-right: 20px;

    &:hover {
        cursor: pointer;
    }

    @media only screen
        and (max-width: 500px) {
        font-size: 18px;
        margin-right: 10px;
    }
`;

const StyledLink = styled(Link)`${linkStyle}`

const StyledInboundLink = styled(InboundLink)`${linkStyle}`

const Nav = ({
    className = null,
    activeIndex = null
}: {
    className?: string
    activeIndex?: number
}) => (
    <Container className={className}>
        <LinkContainer>
            {
                LINKS.map((item, index) => {
                    const LinkComponent = item[2] ? StyledInboundLink : StyledLink;
                    return (
                        <LinkComponent href={item[1]} key={item[0]} $actived={index === activeIndex}>
                            [{item[0]}]
                        </LinkComponent>
                    );
                })
            }
        </LinkContainer>
        <BlogTitle />
    </Container>
)

export default Nav;