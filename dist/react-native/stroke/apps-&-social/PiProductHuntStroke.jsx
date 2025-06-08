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
 * Piproducthuntstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piproducthuntstroke = ({
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
      d="M10.0001 13.625V8H12.8126C14.3659 8 15.6251 9.2592 15.6251 10.8125C15.6251 12.3658 14.3659 13.625 12.8126 13.625H10.0001ZM10.0001 13.625V17M12.0001 21.1501C6.94669 21.1501 2.8501 17.0535 2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C17.0535 2.8501 21.1501 6.94669 21.1501 12.0001C21.1501 17.0535 17.0535 21.1501 12.0001 21.1501Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piproducthuntstroke;
