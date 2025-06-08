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
 * Piarrowleftdownstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftdownstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left down icon",
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
      d="M5.51601 9.99855C5.12863 12.5858 5.07776 15.2066 5.36385 17.7955C5.38839 18.0176 5.48747 18.2154 5.63594 18.3639M14.0013 18.4838C11.414 18.8712 8.79321 18.9221 6.20434 18.636C5.98226 18.6115 5.7844 18.5124 5.63594 18.3639M5.63594 18.3639L18.3639 5.63599"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowleftdownstroke;
