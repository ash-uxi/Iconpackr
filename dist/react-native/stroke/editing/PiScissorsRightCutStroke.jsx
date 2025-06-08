import React from "react";
import Svg, {
  Path,
  Rect,
  Circle,
  Ellipse,
  Line,
  Polygon,
  Polyline,
} from "react-native-svg";

/**
 * Piscissorsrightcutstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piscissorsrightcutstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "scissors right cut icon",
  style,
  ...props
}) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    accessibilityRole="image"
    accessibilityLabel={accessibilityLabel}
    style={style}
    {...props}
  >
    <path
      d="M18.7083 19.2635L11.3198 11.875M11.3198 11.875L18.7083 4.48647M11.3198 11.875L8.28102 14.9138M11.3198 11.875L8.28103 8.8362M8.28102 14.9138C7.68714 14.3199 6.88166 13.9863 6.04178 13.9863C5.20189 13.9863 4.39641 14.3199 3.80253 14.9138C3.20864 15.5077 2.875 16.3132 2.875 17.153C2.875 17.9929 3.20864 18.7984 3.80253 19.3923C4.39641 19.9862 5.20189 20.3198 6.04178 20.3198C6.88166 20.3198 7.68714 19.9862 8.28102 19.3923C8.87491 18.7984 9.20855 17.9929 9.20855 17.153C9.20855 16.3132 8.87491 15.5077 8.28102 14.9138ZM8.28103 8.8362C8.87491 8.24232 9.20855 7.43683 9.20855 6.59695C9.20855 5.75707 8.87491 4.95159 8.28103 4.3577C7.68714 3.76382 6.88166 3.43018 6.04178 3.43018C5.2019 3.43018 4.39641 3.76382 3.80253 4.3577C3.20864 4.95159 2.875 5.75707 2.875 6.59695C2.875 7.43683 3.20864 8.24232 3.80253 8.8362C4.39641 9.43009 5.20189 9.76373 6.04178 9.76373C6.88166 9.76373 7.68714 9.43009 8.28103 8.8362ZM17.125 11.875L16.125 11.875M21.125 11.875H20.125"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piscissorsrightcutstroke;
