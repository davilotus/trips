import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index 1100;
  color: var(--white);
  top: var(--medium);
  right: var(--medium);
  cursor: pointer;

  svg{
    transition: color .3s ease;
  }

  &:hover{
    svg{
      color: var(--highlight);
    }
  }
`
