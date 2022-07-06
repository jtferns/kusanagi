import React from "react"
import styled from "styled-components"
import { Footer } from "./Footer"
import { getEventCards } from "../utils/getEventCard"
import { EventList } from "./EventList"

const Wrapper = styled.div`
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

  animation: colorchange infinite 90s;
  -webkit-animation: colorchange infinite 90s; /* Chrome and Safari */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`

const events = getEventCards()

export const Page = () => (
  <Wrapper>
    <header>
      <span role="img" aria-label="page sparkles soon">
        📃✨🔜
      </span>
    </header>
    <EventList events={events} />
    <Footer />
  </Wrapper>
)
