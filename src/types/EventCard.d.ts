import { Event } from "./Event"

export namespace EventCardTypes {
  export type Props = {
    avatar?: ReactNode
    title?: string
    subheader?: string
    subheaderDesc?: string
    content?: string
    tags?: Event.Tag[]
    links: Event.Link[]
  }
}
