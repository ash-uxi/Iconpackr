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
 * Pigraphchartscatterduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphchartscatterduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph chart scatter icon",
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
      d="M21 21H7C4.79086 21 3 19.2091 3 17V3"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <circle
      cx="14"
      cy="12"
      r="1"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="18"
      cy="5"
      r="1"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="19"
      cy="16"
      r="1"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="8"
      cy="16"
      r="1"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="9"
      cy="8"
      r="1"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigraphchartscatterduostroke;
