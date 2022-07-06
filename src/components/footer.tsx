import React from "react"
import styled from "styled-components"
import tw from "twin.macro"

const FooterContent = styled.footer`
  ${tw`text-gray-700 text-sm p-4`}

  a {
    ${tw`text-blue-700`}
  }
`

export const Footer = () => (
  <FooterContent>
    <span className="footer-text">
      Follow along{" "}
      <a
        href="https://github.com/jtferns/kusanagi"
        target="_blank"
        rel="noreferrer"
      >
        @jtferns/kusanagi
      </a>
      .
    </span>
  </FooterContent>
)
