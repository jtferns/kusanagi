import { format, formatDistance, parse } from "date-fns"
import { schemePastel1 } from "d3-scale-chromatic"
import data from "../data/events.json"
import { Event } from "../types/Event"
import { EventCardTypes } from "../types/EventCard"

const eventsData: Event.Data[] = data
const chipColors: Record<string, string> = {}

const toDate = (date: string): Date => parse(date, "MM/dd/yyyy", new Date())
const toDateStr = (date: string): string => format(toDate(date), "MMM y")

const toDesc = (start: string, end?: string): string | undefined => {
  if (end) {
    return formatDistance(toDate(start), toDate(end))
  }
  return
}

const getTagColor = (tag: string): string => {
  if (chipColors[tag] == null) {
    chipColors[tag] =
      schemePastel1[Object.keys(chipColors).length % schemePastel1.length]
  }
  return chipColors[tag]
}

export const getEventCards: () => EventCardTypes.Props[] = () => {
  return eventsData.map((ev) => ({
    title: ev.title,
    content: ev.summary,
    subheader: `${toDateStr(ev.start)}${
      ev.end ? ` - ${toDateStr(ev.end)}` : ""
    }`,
    subheaderDesc: toDesc(ev.start, ev.end),
    tags: ev.tags.map((t) => ({ label: t, color: getTagColor(t) })),
    links: ev.links,
  }))
}
