import styled from "styled-components"
import tw from "twin.macro"
import { LinksTypes } from "../types/Links"
import { Icons } from "./Icons"

const Wrapper = styled.div`
  ${tw`flex flex-wrap space-x-2 justify-start`}
`

const Link = styled.a`
  ${tw`flex text-sm text-purple-500 opacity-80`}
  ${tw`transition-all hover:font-bold hover:text-purple-600 hover:underline hover:cursor-pointer`}
`

const LinkContent = styled.div`
  ${tw`flex items-center`}

  svg {
    ${tw`pr-0.5`}
  }
`

export const Links = ({ links }: LinksTypes.Props) => {
  return (
    <Wrapper>
      {links.map((l, i) => (
        <Link key={i} href={l.link} target="_blank" rel="noreferrer">
          <LinkContent>
            <Icons icon={l.icon as any} />
            {l.text}
          </LinkContent>
        </Link>
      ))}
    </Wrapper>
  )
}
