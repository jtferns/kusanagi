export namespace TagsTypes {
  type Tag = {
    icon?: string
    color?: string
    label: string
  }

  export type Props = {
    tags: Tag[]
  }
}
