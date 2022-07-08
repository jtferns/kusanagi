import styled from "styled-components"
import tw from "twin.macro"

import { TagsTypes } from "../types/Tags"

const Wrapper = styled.div`
  ${tw`flex flex-wrap space-x-2 justify-end`}
`

const Tag = styled.div<{ $bgColor?: string }>`
  ${tw`flex rounded-full text-sm p-0.5 px-2 text-gray-900 bg-yellow-500 opacity-80 border border-gray-600`}
  ${({ $bgColor }) => $bgColor && `background-color: ${$bgColor};`}
`

export const Tags = ({ tags }: TagsTypes.Props) => {
  return (
    <Wrapper>
      {tags.map((t, i) => (
        <Tag key={i} $bgColor={t.color}>
          {t.label}
        </Tag>
      ))}
    </Wrapper>
  )
}
