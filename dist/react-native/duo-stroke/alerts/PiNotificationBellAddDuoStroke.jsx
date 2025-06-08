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
 * Pinotificationbelladdduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinotificationbelladdduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "notification bell add icon",
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
      d="M13 8a1 1 0 1 0-2 0v2H9a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2z"
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

export default Pinotificationbelladdduostroke;
