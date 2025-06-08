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
 * Pigraphbubblechartstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphbubblechartstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph bubblechart icon",
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
      d="M21 21H7C4.79086 21 3 19.2091 3 17V3M19 5.01V5M11 10.01V10M10 16C10 16.5523 9.55228 17 9 17C8.44772 17 8 16.5523 8 16C8 15.4477 8.44772 15 9 15C9.55228 15 10 15.4477 10 16ZM19 11C19 11.5523 18.5523 12 18 12C17.4477 12 17 11.5523 17 11C17 10.4477 17.4477 10 18 10C18.5523 10 19 10.4477 19 11Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigraphbubblechartstroke;
