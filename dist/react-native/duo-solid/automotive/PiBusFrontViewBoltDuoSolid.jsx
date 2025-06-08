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
 * Pibusfrontviewboltduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibusfrontviewboltduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bus front view bolt icon",
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
      fill={color || "#000"}
      fillRule="evenodd"
      d="M10.292 2h3.416c1.054 0 1.903 0 2.592.055.709.056 1.332.175 1.911.46a5 5 0 0 1 1.902 1.642A4 4 0 0 1 23 8v.5a1.5 1.5 0 0 1-1.5 1.5H21v10.5a2.5 2.5 0 0 1-5 0V20H8v.5a2.5 2.5 0 0 1-5 0V10h-.5A1.5 1.5 0 0 1 1 8.5V8a4 4 0 0 1 2.887-3.843 5 5 0 0 1 1.902-1.641C6.368 2.23 6.99 2.11 7.7 2.055 8.39 2 9.238 2 10.292 2"
      clipRule="evenodd"
      opacity={0.28}
    />{" "}
    <path d="M12 8.5 9.846 12h4.308L12 15.5" />
  </Svg>
);

export default Pibusfrontviewboltduosolid;
