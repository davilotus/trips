import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1100;
  color: var(--white);
  top: var(--small);
  right: var(--small);
  cursor: pointer;

  svg {
    transition: color 0.3s ease;
  }

  &:hover {
    svg {
      color: var(--highlight);
    }
  }
`
