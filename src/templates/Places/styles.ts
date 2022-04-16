import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
`

export const Container = styled.section`
  padding: 0 20px;
  max-width: var(--container);
  width: 100%;
  margin: 60px auto;
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin: 0 0 20px;
  padding-bottom: 10px;
  position: relative;

  &::before {
    position: absolute;
    left: 0;
    border-radius: 4px;
    bottom: 0;
    content: '';
    width: 50px;
    height: 4px;
    background: var(--highlight);
  }
`

export const Body = styled.div`
  margin: 0 0 var(--medium);

  p {
    margin: 0 0 var(--small);
  }
`

export const Gallery = styled.div`
  max-width: var(--container);
  display: grid;
  grid-gap: var(--medium);

  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    @keyframes placeholder Shimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`
