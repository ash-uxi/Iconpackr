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
 * Pigraphchartfunnelstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphchartfunnelstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph chart funnel icon",
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
    <rect
      x="1.5"
      y="4"
      width="20"
      height="1"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="10.5"
      y="19"
      width="2"
      height="1"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="4.5"
      y="9"
      width="14"
      height="1"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
    <rect
      x="7.5"
      y="14"
      width="8"
      height="1"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigraphchartfunnelstroke;
