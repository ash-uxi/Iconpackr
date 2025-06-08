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
 * Piceilinglampoffduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piceilinglampoffduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ceiling lamp off icon",
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
    <path d="M13 4a1 1 0 0 0-2 0v2.05a10 10 0 0 1 2 0z" fill="none" />
    <path d="M15 16H9m-6 0a9 9 0 1 1 18 0z" opacity={0.28} fill="none" />
    <path
      d="M8.126 17a4.002 4.002 0 0 0 7.748 0h-2.142a2 2 0 0 1-3.464 0z"
      fill="none"
    />
  </Svg>
);

export default Piceilinglampoffduostroke;
