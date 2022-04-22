import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root{
    --highlight: #47bddf;
    --background: #081217;
    --white: #eee;
    --container: 1170px;
    --small: 1.5rem;
    --medium: 2.5rem;
    --large: 3rem;
    --xlarge: 5rem;
  }
  
  *{

    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next{ 
    background: var(--background);
    color: var(--white);
  }

  body{ 
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  .container{
    padding: 0 15px;
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
  }

  section{
    width: 100%;
  }

  p{ 
    font-size: 1rem;
    line-height: var(--small);
  }

  a{
    color: var(--highlight);
  }
`

export default GlobalStyles
