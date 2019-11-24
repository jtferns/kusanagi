import React from "react";
import Sync from "@material-ui/icons/Sync";
import styled from "@emotion/styled";

const Header = styled.header`
  @keyframes colorchange {
    0% {
      background: #fbb4ae;
    }
    12.5% {
      background: #b3cde3;
    }
    25% {
      background: #ccebc5;
    }
    37.5% {
      background: #decbe4;
    }
    50% {
      background: #fed9a6;
    }
    62.5% {
      background: #ffffcc;
    }
    75% {
      background: #e5d8bd;
    }
    87.5% {
      background: #fddaec;
    }
    100% {
      background: #f2f2f2;
    }
  }

  @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */ {
    0% {
      background: #fbb4ae;
    }
    12.5% {
      background: #b3cde3;
    }
    25% {
      background: #ccebc5;
    }
    37.5% {
      background: #decbe4;
    }
    50% {
      background: #fed9a6;
    }
    62.5% {
      background: #ffffcc;
    }
    75% {
      background: #e5d8bd;
    }
    87.5% {
      background: #fddaec;
    }
    100% {
      background: #f2f2f2;
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
  color: #8da0cb;
`;

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
`;

class Loader extends React.Component {
  render() {
    return (
      <Header>
        <p>Loading...</p>
        <SpinningSync />
      </Header>
    );
  }
}

export default Loader;
