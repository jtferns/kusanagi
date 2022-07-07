import { Cloud, Code } from "@styled-icons/fa-solid"
import {
  VideoCamera,
  PresentationChartBar,
} from "@styled-icons/heroicons-solid"

const IconMap = {
  Cloud: <Cloud size={18} />,
  Code: <Code size={18} />,
  VideoLibrary: <VideoCamera size={18} />,
  PresentToAll: <PresentationChartBar size={18} />,
}

export const Icons = ({ icon }: { icon: keyof typeof IconMap }) =>
  <>{IconMap[icon]}</> || <></>
