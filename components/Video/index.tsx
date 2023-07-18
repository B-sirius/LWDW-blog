import styled from 'styled-components';

type Props = {
    src: string;
    autoPlay: boolean;
    description?: string;
};

const Wrapper = styled.div`
    max-width: 100%;
    border: 1px solid hsl(210deg, 15%, 25%);
    padding: 10px;
    margin: 36px auto 64px;
`;

const StyledVideo = styled.video`
    width: 100%;
    cursor: pointer;
`;

const Description = styled.div`
    padding-top: 8px;
    text-align: center;
    font-size: 15px;
`;

const Video = ({ src, autoPlay, description }: Props) => (
    <Wrapper>
        <StyledVideo autoPlay={autoPlay} loop controls muted>
            <source src={src} />
        </StyledVideo>
        {description ? <Description>{description}</Description> : null}
    </Wrapper>
);

export default Video;
