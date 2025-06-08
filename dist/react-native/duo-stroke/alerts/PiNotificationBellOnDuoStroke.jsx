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
 * Pinotificationbellonduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinotificationbellonduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "notification bell on icon",
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
      d="M4.818 9.609a7.207 7.207 0 0 1 14.365 0l.355 4.262c.043.515.206.993.367 1.479a1.587 1.587 0 0 1-1.33 2.077 59.5 59.5 0 0 1-13.149 0 1.587 1.587 0 0 1-1.33-2.08c.161-.485.324-.963.367-1.478z"
      opacity={0.28}
      fill="none"
    />
    <path
      fillRule="evenodd"
      d="M8.193 18.672q.459.029.918.05a61 61 0 0 0 6.698-.05 3.843 3.843 0 0 1-7.616 0M12 20a1.84 1.84 0 0 1-1.74-1.234q1.74.051 3.479 0A1.84 1.84 0 0 1 12 20"
      clipRule="evenodd"
      fill="none"
    />
  </Svg>
);

export default Pinotificationbellonduostroke;
