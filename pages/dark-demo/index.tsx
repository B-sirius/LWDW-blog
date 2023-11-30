import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f0f0;
    --foreground: #333;
  }
  html, body {
    height: 100vh;
    margin: 0;
  }
  body {
    color: var(--foreground);
    background: var(--background);
  }
  @media (prefers-color-scheme: dark) {
    :root {
    --background: #00008B;
    --foreground: #f0f0f0;
  }
  }
`;

const Label = styled.div`
    flex-grow: 1;
    text-align: center;
    text-transform: uppercase;
    &:after {
        content: 'Light';
    }

    @media (prefers-color-scheme: dark) {
        &:after {
            content: 'Dark';
        }
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
`;

export default function DarkDemo() {
    return (
        <Container>
            <GlobalStyle />
            <Label>Color Scheme: </Label>
        </Container>
    );
}
