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
 * Pigraphchartcombinationchartduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphchartcombinationchartduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph chart combination chart icon",
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
      d="M3.5 10L8.83337 4.5L14.1667 10L19.5 4.5"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M3.5 20V15M8.83333 20V11M14.1667 20V15M19.5 20V11"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pigraphchartcombinationchartduostroke;
