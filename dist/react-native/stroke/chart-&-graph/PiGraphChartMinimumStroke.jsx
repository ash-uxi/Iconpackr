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
 * Pigraphchartminimumstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigraphchartminimumstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "graph chart minimum icon",
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
      d="M21 21H7C4.79086 21 3 19.2091 3 17V3M8 17H8.01M11 17H11.01M17 17H17.01M20 17H20.01M13.99 17H14M7 5C7.82746 10.1832 10.6479 14 14 14C17.3521 14 20.1725 10.1832 21 5"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pigraphchartminimumstroke;
