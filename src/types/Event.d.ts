export namespace Event {
  export type Tag = {
    icon?: string
    color?: string
    label: string
  }
  export type Link = {
    link: string
    text: string
    icon: string
  }

  export type Data = {
    title: string
    start: string
    end?: string
    summary: string
    links: Link[]
    tags: string[]
  }
}
