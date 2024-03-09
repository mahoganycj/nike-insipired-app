import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const BackSvg = (props: SvgProps) => (
  <Svg
    fill="none"
    stroke="black"
    strokeWidth={1.5}
    className="w-6 h-6"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5 8.25 12l7.5-7.5"
    />
  </Svg>
)
export default BackSvg;
