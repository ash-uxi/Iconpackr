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
 * Pidrawpencilcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidrawpencilcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "draw pencil icon",
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
      d="M2.85 12a9.15 9.15 0 1 1 18.3-.004A9.15 9.15 0 0 1 2.85 12"
      opacity={0.28}
    />
    <path d="M9.012 13 8 14.693v5.538M9.012 13 12 8l2.988 5m-5.976 0h5.976m0 0L16 14.693v5.538m0 0a9.15 9.15 0 1 0-8 0m8 0a9.1 9.1 0 0 1-4 .919 9.1 9.1 0 0 1-4-.919" />
  </Svg>
);

export default Pidrawpencilcontrast;
