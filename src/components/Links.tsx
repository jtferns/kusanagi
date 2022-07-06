import styled from "styled-components"
import tw from "twin.macro"
import { LinksTypes } from "../types/Links"

const Wrapper = styled.div`
  ${tw`flex flex-wrap space-x-2 justify-start`}
`

const Link = styled.a`
  ${tw`flex text-sm text-purple-500 opacity-80`}
  ${tw`transition-all hover:font-bold hover:text-purple-600 hover:underline hover:cursor-pointer`}
`

export const Links = ({ links }: LinksTypes.Props) => {
  return (
    <Wrapper>
      {links.map((l, i) => (
        <Link key={i} href={l.link} target="_blank" rel="noreferrer">
          {/* TODO: show icons */}
          {l.text}
        </Link>
      ))}
    </Wrapper>
  )
}
