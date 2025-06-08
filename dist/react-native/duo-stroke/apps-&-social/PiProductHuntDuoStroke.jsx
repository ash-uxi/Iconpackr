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
 * Piproducthuntduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piproducthuntduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "product hunt icon",
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
      d="M10 13.625V8H12.8125C14.3658 8 15.625 9.2592 15.625 10.8125C15.625 12.3658 14.3658 13.625 12.8125 13.625H10ZM10 13.625V17"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501C17.0535 21.1501 21.1501 17.0535 21.1501 12.0001C21.1501 6.94669 17.0535 2.8501 12.0001 2.8501C6.94669 2.8501 2.8501 6.94669 2.8501 12.0001Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Piproducthuntduostroke;
