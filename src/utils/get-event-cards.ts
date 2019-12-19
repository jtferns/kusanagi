import data from "../data/events.json"
import { EventCardProps } from "../components/event-card.js"

interface Link {
  link: string
  text: string
  icon: string
}

interface EventData {
  title: string
  start: string
  end?: string
  summary: string
  links: Link[]
  tags: string[]
}

const eventsData: EventData[] = data

export const getEventCards: () => EventCardProps[] = () => {
  return eventsData.map(ev => ({
    title: ev.title,
    content: ev.summary,
    subheader: `${ev.start} - ${ev.end}`,
    chips: ev.tags.map(t => ({ label: t }))
  }))
}
