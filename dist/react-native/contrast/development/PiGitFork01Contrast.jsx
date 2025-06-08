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
 * Pigitfork01contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitfork01contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git fork01 icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M9 5.5a3 3 0 0 1-2.991 3H6a3 3 0 1 1 3-3M15 18.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M15 5.5a3 3 0 0 0 2.991 3H18a3 3 0 1 0-3-3" />
    </g>
    <path d="M12 15.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 0V12m0 0h-1.2c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311c-.23-.45-.298-.997-.318-1.862M12 12h1.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311c.23-.45.298-.997.318-1.862M6.01 8.5A3 3 0 1 0 6 8.5zm11.982 0a3 3 0 1 1 .009 0z" />
  </Svg>
);

export default Pigitfork01contrast;
