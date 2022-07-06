import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { EventListTypes } from "../types/EventList"
import { EventCard } from "./EventCard"

const List = styled.div`
  ${tw`overflow-y-auto flex flex-col items-center`}
  height: 90vh;
  width: 80vw;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  &::-webkit-scrollbar {
    /* WebKit */
    width: 0;
    height: 0;
  }
`

export const EventList = ({ events }: EventListTypes.Props) => {
  return (
    <List>
      {events.map((e, i) => (
        <EventCard key={i} {...e} />
      ))}
    </List>
  )
}
