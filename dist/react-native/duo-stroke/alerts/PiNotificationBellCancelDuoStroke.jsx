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
 * Pinotificationbellcancelduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinotificationbellcancelduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "notification bell cancel icon",
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
      d="M10.232 8.293a1 1 0 0 0-1.414 1.414l1.768 1.768-1.768 1.768a1 1 0 0 0 1.414 1.414L12 12.889l1.768 1.768a1 1 0 0 0 1.414-1.414l-1.768-1.768 1.768-1.768a1 1 0 0 0-1.414-1.414L12 10.06z"
      fill="none"
    />
    <path
      d="M4.818 9.609a7.207 7.207 0 0 1 14.365 0l.355 4.262c.043.515.206.993.367 1.479a1.587 1.587 0 0 1-1.33 2.077 59.5 59.5 0 0 1-13.149 0 1.587 1.587 0 0 1-1.33-2.08c.161-.485.324-.963.367-1.478z"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9.11 18.722a61 61 0 0 1-.917-.05 3.843 3.843 0 0 0 7.616 0 60 60 0 0 1-2.07.094 1.843 1.843 0 0 1-3.478 0 61 61 0 0 1-1.15-.044"
      fill="none"
    />
  </Svg>
);

export default Pinotificationbellcancelduostroke;
