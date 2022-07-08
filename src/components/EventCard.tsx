import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { EventCardTypes } from "../types/EventCard"
import { Links } from "./Links"
import { Tags } from "./Tags"

const Card = styled.div`
  ${tw`rounded-lg border-gray-700 border-2 text-xl bg-white text-gray-600 bg-opacity-70 p-4 m-2`}
  width: 60vw;
`

const CardContent = styled.div`
  ${tw`flex flex-col space-y-2`}
`

const Header = styled.h2`
  ${tw`flex justify-between items-center`}
`

const Subheader = styled.small`
  ${tw`text-sm`}
`

const Content = styled.div`
  ${tw`text-base`}
`

const Footer = styled.div`
  ${tw`flex justify-between`}
`

export const EventCard = ({
  title,
  subheader,
  subheaderDesc,
  content,
  tags,
  links,
}: EventCardTypes.Props) => {
  return (
    <Card>
      <CardContent>
        <Header>
          {title}
          <Subheader title={subheaderDesc}>{subheader}</Subheader>
        </Header>
        {content && (
          <Content>
            <p>{content}</p>
          </Content>
        )}
        <Footer>
          <Links links={links} />
          <Tags tags={tags || []} />
        </Footer>
      </CardContent>
    </Card>
  )
}
