import data from "../data/events.json"
import { Event } from "../types/Event"
import { EventCardTypes } from "../types/EventCard"

const eventsData: Event.Data[] = data

export const getEventCards: () => EventCardTypes.Props[] = () => {
  return eventsData.map((ev) => ({
    title: ev.title,
    content: ev.summary,
    subheader: `${ev.start} - ${ev.end}`, // TODO: format dates
    chips: ev.tags.map((t) => ({ label: t })),
    links: ev.links,
  }))
}
