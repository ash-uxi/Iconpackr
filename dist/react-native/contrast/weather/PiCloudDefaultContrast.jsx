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
 * Piclouddefaultcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piclouddefaultcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "cloud default icon",
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
    <path d="M6.017 11.026a6.5 6.5 0 0 1 12.651-1.582A5.501 5.501 0 0 1 16.5 20h-10a4.5 4.5 0 0 1-.483-8.974m0 0A6.6 6.6 0 0 0 6.174 13" />
  </Svg>
);

export default Piclouddefaultcontrast;
