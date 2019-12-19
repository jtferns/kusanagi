import React from "react"
import styled from "@emotion/styled"
import { Footer } from "./footer"
import { EventCard } from "./event-card"
import { getEventCards } from "../utils/get-event-cards"

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

const events = getEventCards()

export const Loader = () => (
  <Header>
    <span role="img" aria-label="page sparkles soon">
      📃✨🔜
    </span>
    {events.map(e => (
      <EventCard {...e} />
    ))}
    <Footer />
  </Header>
)
