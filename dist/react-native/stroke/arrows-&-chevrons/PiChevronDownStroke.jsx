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
 * Pichevrondownstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevrondownstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron down icon",
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
      d="M8 10.1392C9.06206 11.601 10.3071 12.9104 11.7021 14.0334C11.8774 14.1744 12.1226 14.1744 12.2979 14.0334C13.6929 12.9104 14.9379 11.601 16 10.1392"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pichevrondownstroke;
