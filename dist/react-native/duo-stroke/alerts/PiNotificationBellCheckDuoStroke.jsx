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
 * Pinotificationbellcheckduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinotificationbellcheckduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "notification bell check icon",
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
      d="M15.564 9.826a1 1 0 1 0-1.128-1.652 14 14 0 0 0-3.575 3.53l-1.154-1.153a1 1 0 1 0-1.414 1.415L10.33 14a1 1 0 0 0 1.574-.21 12 12 0 0 1 3.66-3.964"
      fill="none"
    />
    <path
      d="M4.818 9.609a7.207 7.207 0 0 1 14.365 0l.355 4.262c.043.515.206.993.367 1.479a1.587 1.587 0 0 1-1.33 2.077 59.5 59.5 0 0 1-13.149 0 1.587 1.587 0 0 1-1.33-2.08c.161-.485.324-.963.367-1.478z"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9.11 18.722a60 60 0 0 1-.917-.05 3.843 3.843 0 0 0 7.616 0 61 61 0 0 1-2.07.094 1.843 1.843 0 0 1-3.478 0 61 61 0 0 1-1.15-.044"
      fill="none"
    />
  </Svg>
);

export default Pinotificationbellcheckduostroke;
