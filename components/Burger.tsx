import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Burger = (props: SvgProps) => (
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
      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
    />
  </Svg>
)
export default Burger;
