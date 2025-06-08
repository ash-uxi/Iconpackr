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
 * Piarrowrightcircleduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowrightcircleduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow right circle icon",
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
      d="M12.0514 8C13.4759 9.03704 14.7553 10.2485 15.8581 11.6038C15.9527 11.72 16 11.86 16 12M12.0514 16C13.4759 14.963 14.7553 13.7515 15.8581 12.3962C15.9527 12.28 16 12.14 16 12M16 12L8 12"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2.84985 12.0001C2.84985 17.0535 6.94645 21.1501 11.9999 21.1501C17.0533 21.1501 21.1499 17.0535 21.1499 12.0001C21.1499 6.94669 17.0533 2.8501 11.9999 2.8501C6.94645 2.8501 2.84985 6.94669 2.84985 12.0001Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piarrowrightcircleduostroke;
