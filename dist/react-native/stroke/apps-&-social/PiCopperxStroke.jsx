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
 * Picopperxstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picopperxstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "copperx icon",
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
      d="M20.6469 9C19.405 5.42012 16.0027 2.8501 12.0001 2.8501C6.94669 2.8501 2.8501 6.94669 2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501C16.0027 21.1501 19.405 18.5801 20.6469 15.0002M13.0001 12.0001C13.0001 12.5524 12.5524 13.0001 12.0001 13.0001C11.4478 13.0001 11.0001 12.5524 11.0001 12.0001C11.0001 11.4478 11.4478 11.0001 12.0001 11.0001C12.5524 11.0001 13.0001 11.4478 13.0001 12.0001Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Picopperxstroke;
