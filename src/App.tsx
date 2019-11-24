import React from "react";
import Loader from "./loader";
import styled from "@emotion/styled";

const AppWrapper = styled.div`
  text-align: "center";
`;

function App() {
  return (
    <AppWrapper>
      <Loader />
    </AppWrapper>
  );
}

export default App;
