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
 * Picloudaicontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picloudaicontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud ai icon",
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
      fill={color}
      d="M22 14.5a5.5 5.5 0 0 1-5.5 5.5h-10a4.5 4.5 0 0 1-.483-8.974 6.5 6.5 0 0 1 12.651-1.582A5.5 5.5 0 0 1 22 14.5"
      opacity={0.28}
    />
    <path d="M9 17h.01M12.5 5a6.5 6.5 0 0 1 6.168 4.444A5.501 5.501 0 0 1 16.5 20h-10a4.5 4.5 0 0 1-.483-8.974A6.5 6.5 0 0 1 12.5 5m.5 5c-.637 1.617-1.34 2.345-3 3 1.66.655 2.363 1.383 3 3 .637-1.617 1.34-2.345 3-3-1.66-.655-2.363-1.383-3-3" />
  </Svg>
);

export default Picloudaicontrast;
