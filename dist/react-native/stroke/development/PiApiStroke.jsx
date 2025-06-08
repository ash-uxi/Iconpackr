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
 * Piapistroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piapistroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "api icon",
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
      d="M12 13V8H14.5C15.8807 8 17 9.11929 17 10.5C17 11.8807 15.8807 13 14.5 13H12ZM12 13V16M20 8V16M9 13V11.1326C9 9.84458 8.21583 8.68633 7.01993 8.20797C6.68617 8.07447 6.31383 8.07447 5.98007 8.20797C4.78417 8.68633 4 9.84458 4 11.1326V12.9999M9 13V16M9 13L4 12.9999M4 12.9999V16"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piapistroke;
