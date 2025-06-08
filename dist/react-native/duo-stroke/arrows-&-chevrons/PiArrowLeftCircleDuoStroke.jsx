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
 * Piarrowleftcircleduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftcircleduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left circle icon",
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
      d="M11.9486 16C10.5241 14.963 9.24467 13.7515 8.1419 12.3962C8.0473 12.28 8 12.14 8 12M11.9486 8C10.5241 9.03704 9.24467 10.2485 8.1419 11.6038C8.0473 11.72 8 11.86 8 12M8 12L16 12"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M21.1501 11.9999C21.1501 6.94645 17.0535 2.84985 12.0001 2.84985C6.94669 2.84985 2.8501 6.94645 2.8501 11.9999C2.8501 17.0533 6.94669 21.1499 12.0001 21.1499C17.0535 21.1499 21.1501 17.0533 21.1501 11.9999Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarrowleftcircleduostroke;
