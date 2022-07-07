import { format, parse } from "date-fns"
import data from "../data/events.json"
import { Event } from "../types/Event"
import { EventCardTypes } from "../types/EventCard"

const eventsData: Event.Data[] = data

const toDateStr = (date: string): string =>
  format(parse(date, "MM/dd/yyyy", new Date()), "MMM y")

export const getEventCards: () => EventCardTypes.Props[] = () => {
  return eventsData.map((ev) => ({
    title: ev.title,
    content: ev.summary,
    subheader: `${toDateStr(ev.start)}${
      ev.end ? ` - ${toDateStr(ev.end)}` : ""
    }`,
    chips: ev.tags.map((t) => ({ label: t })),
    links: ev.links,
  }))
}
