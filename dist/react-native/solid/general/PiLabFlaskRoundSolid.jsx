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
 * Pilabflaskroundsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilabflaskroundsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "lab flask round icon",
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
      d="M10 3h4m-4 0H9m1 0v4.27a7.51 7.51 0 0 0-5.427 6.183M14 3h1m-1 0v4.27a7.5 7.5 0 0 1 5.486 7.696m0 0a7.5 7.5 0 1 1-14.913-1.513m14.913 1.513C14 17.5 12 10 4.573 13.453"
      stroke="none"
    />
    <path
      fill={color}
      d="M4.5 14.5a7.5 7.5 0 0 0 14.986.467C14 17.5 12 10 4.573 13.453a8 8 0 0 0-.073 1.048"
      opacity={0.28}
      stroke="none"
    />
    <path d="M9 16h.01" stroke="none" />
  </Svg>
);

export default Pilabflaskroundsolid;
