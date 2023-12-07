import styled, { keyframes } from 'styled-components'
import PokeballSVG from '../assets/loader.svg'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Loader = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${PokeballSVG});
  background-size: contain;
  background-repeat: no-repeat;
  animation: ${rotate} 2s linear infinite;
`

const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoaderSVG = () => {
  return (
    <LoaderContainer>
      <Loader />;
    </LoaderContainer>
  )
}

export default LoaderSVG