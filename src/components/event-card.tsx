import React, { ReactNode } from "react"
import {
  makeStyles,
  createStyles,
  Theme,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  Chip
} from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: "60vw",
      color: "#4a4a4a",
      opacity: 0.7,
      margin: ".25em"
    }
  })
)

interface ChipContent {
  icon?: string
  label: string
}

export interface EventCardProps {
  avatar?: ReactNode
  title?: string
  subheader?: string
  content?: string
  chips?: ChipContent[]
}

export const EventCard = (props: EventCardProps) => {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={props.avatar}
        title={props.title}
        subheader={props.subheader}
      />
      {props.content && (
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content}
          </Typography>
        </CardContent>
      )}
      <CardActions>
        {props.chips &&
          props.chips.length &&
          props.chips.map((c, i) => (
            <Chip key={i} size="small" label={c.label} />
          ))}
      </CardActions>
    </Card>
  )
}
