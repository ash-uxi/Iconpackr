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
 * Pilistnumberduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistnumberduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list number icon",
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
      d="M21 6H11M21 12H11M21 18H11"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M5 9.99978V4.75488C4.3236 4.92051 3.80674 5.38628 3.5 5.99976M7 18.9998H3.60797V18.4998C4.49018 17.8818 5.39421 17.2985 6.11723 16.4886C6.60019 15.9476 6.65362 15.138 6.13314 14.5942C5.71038 14.1526 4.9793 14.0078 4.41574 14.227C4.03522 14.375 3.81857 14.6715 3.60797 14.9998"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pilistnumberduostroke;
