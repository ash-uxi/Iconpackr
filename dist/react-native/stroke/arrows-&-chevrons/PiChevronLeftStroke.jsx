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
 * Pichevronleftstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronleftstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron left icon",
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
      d="M14.1252 8.13916C12.6634 9.20122 11.354 10.4462 10.231 11.8413C10.09 12.0165 10.09 12.2618 10.231 12.437C11.354 13.8321 12.6634 15.0771 14.1252 16.1392"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pichevronleftstroke;
