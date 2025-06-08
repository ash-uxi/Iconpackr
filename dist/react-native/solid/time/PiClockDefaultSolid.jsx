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
 * Piclockdefaultsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piclockdefaultsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "clock default icon",
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
      d="M1.84961 12.0001C1.84961 6.39441 6.39392 1.8501 11.9996 1.8501C17.6053 1.8501 22.1496 6.39441 22.1496 12.0001C22.1496 17.6058 17.6053 22.1501 11.9996 22.1501C6.39392 22.1501 1.84961 17.6058 1.84961 12.0001ZM12.9995 7.90012C12.9995 7.34784 12.5518 6.90012 11.9995 6.90012C11.4472 6.90012 10.9995 7.34784 10.9995 7.90012V12.8166C10.9995 13.3294 11.2615 13.8067 11.6942 14.0821L14.5064 15.8716C14.9723 16.1681 15.5904 16.0308 15.8869 15.5648C16.1834 15.0989 16.046 14.4808 15.5801 14.1843L12.9995 12.5421V7.90012Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Piclockdefaultsolid;
