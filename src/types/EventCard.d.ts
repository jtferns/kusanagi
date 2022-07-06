import { Event } from "./Event"

export namespace EventCardTypes {
  type ChipContent = {
    icon?: string
    label: string
  }

  export type Props = {
    avatar?: ReactNode
    title?: string
    subheader?: string
    content?: string
    chips?: ChipContent[]
    links: Event.Link[]
  }
}
