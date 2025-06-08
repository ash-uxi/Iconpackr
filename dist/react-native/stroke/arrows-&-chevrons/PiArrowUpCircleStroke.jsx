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
 * Piarrowupcirclestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowupcirclestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow up circle icon",
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
      d="M8.00006 11.9488C9.03711 10.5243 10.2486 9.24485 11.6039 8.14208C11.7201 8.04748 11.8601 8.00018 12.0001 8.00018M16.0001 11.9488C14.963 10.5243 13.7515 9.24485 12.3963 8.14208C12.28 8.04748 12.14 8.00018 12.0001 8.00018M12.0001 8.00018L12.0001 16.0002M21.1501 12.0001C21.1501 17.0535 17.0535 21.1501 12.0001 21.1501C6.94669 21.1501 2.8501 17.0535 2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C17.0535 2.8501 21.1501 6.94669 21.1501 12.0001Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piarrowupcirclestroke;
