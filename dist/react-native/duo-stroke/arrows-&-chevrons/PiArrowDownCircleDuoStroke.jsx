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
 * Piarrowdowncircleduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowdowncircleduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow down circle icon",
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
      d="M11.9999 2.84985C6.94645 2.84985 2.84985 6.94645 2.84985 11.9999C2.84985 17.0533 6.94645 21.1499 11.9999 21.1499C17.0533 21.1499 21.1499 17.0533 21.1499 11.9999C21.1499 6.94645 17.0533 2.84985 11.9999 2.84985Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M16 12.0514C14.963 13.4759 13.7515 14.7553 12.3962 15.8581C12.28 15.9527 12.14 16 12 16M8 12.0514C9.03704 13.4759 10.2485 14.7553 11.6038 15.8581C11.72 15.9527 11.86 16 12 16M12 16L12 8"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowdowncircleduostroke;
