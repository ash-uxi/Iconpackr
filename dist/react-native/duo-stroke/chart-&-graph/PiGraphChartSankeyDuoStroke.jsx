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
 * Pigraphchartsankeyduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphchartsankeyduostroke = ({
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
      d="M2.5 3V5M2.5 10V8V6M20.5 3V10M2.5 5V6M2.5 5H20.5M2.5 6H20.5"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20.5 17V19M20.5 21V19M2.5 8H4.11484C7.36729 8 10.2921 10.9802 11.5 14C12.7079 17.0198 15.6327 19 18.8852 19H20.5"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pigraphchartsankeyduostroke;
