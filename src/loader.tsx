import React from "react"
import Sync from "@material-ui/icons/Sync"
import styled from "@emotion/styled"
import { Footer } from "./footer"

const Header = styled.header`
  @keyframes colorchange {
    0% {
      background: #fbb4ae;
    }
    6% {
      background: #b3cde3;
    }
    12% {
      background: #ccebc5;
    }
    18% {
      background: #decbe4;
    }
    24% {
      background: #fed9a6;
    }
    30% {
      background: #ffffcc;
    }
    36% {
      background: #e5d8bd;
    }
    42% {
      background: #fddaec;
    }
    48% {
      background: #f2f2f2;
    }
    54% {
      background: #f2f2f2;
    }
    60% {
      background: #fddaec;
    }
    66% {
      background: #e5d8bd;
    }
    72% {
      background: #ffffcc;
    }
    78% {
      background: #fed9a6;
    }
    84% {
      background: #decbe4;
    }
    90% {
      background: #ccebc5;
    }
    96% {
      background: #b3cde3;
    }
    100% {
      background: #fbb4ae;
    }
  }

  @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */ {
    0% {
      background: #fbb4ae;
    }
    6% {
      background: #b3cde3;
    }
    12% {
      background: #ccebc5;
    }
    18% {
      background: #decbe4;
    }
    24% {
      background: #fed9a6;
    }
    30% {
      background: #ffffcc;
    }
    36% {
      background: #e5d8bd;
    }
    42% {
      background: #fddaec;
    }
    48% {
      background: #f2f2f2;
    }
    54% {
      background: #f2f2f2;
    }
    60% {
      background: #fddaec;
    }
    66% {
      background: #e5d8bd;
    }
    72% {
      background: #ffffcc;
    }
    78% {
      background: #fed9a6;
    }
    84% {
      background: #decbe4;
    }
    90% {
      background: #ccebc5;
    }
    96% {
      background: #b3cde3;
    }
    100% {
      background: #fbb4ae;
    }
  }

  animation: colorchange infinite 45s;
  -webkit-animation: colorchange infinite 45s; /* Chrome and Safari */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #ffffff;

  a {
    color: #ffffff;
  }
`

// TODO: figure out why styled types 💥 (ts2589)
const SpinningSync: any = styled(Sync)`
  @keyframes Loader-logo-spin {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  animation: Loader-logo-spin infinite 10s linear;
  height: 40vmin !important;
  width: 40vmin !important;
  pointer-events: none;
`

export const Loader = () => (
  <Header>
    <p>Loading...</p>
    <SpinningSync />
    <Footer />
  </Header>
)
