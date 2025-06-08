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
 * Pigraphchartsankeystroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphchartsankeystroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph chart sankey icon",
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
      d="M2.5 3V5M2.5 10V8M20.5 3V10M20.5 17V19M20.5 21V19M2.5 5V6M2.5 5H20.5M2.5 6V8M2.5 6H20.5M2.5 8H4.11484C7.36729 8 10.2921 10.9802 11.5 14C12.7079 17.0198 15.6327 19 18.8852 19H20.5"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigraphchartsankeystroke;
