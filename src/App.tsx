import React from "react"
import styled from "@emotion/styled"
import { Loader } from "./loader"

const AppWrapper = styled.div`
  text-align: "center";
`

function App() {
  return (
    <AppWrapper>
      <Loader />
    </AppWrapper>
  )
}

export default App
