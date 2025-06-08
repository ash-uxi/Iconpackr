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
 * Pigitcommitsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitcommitsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git commit icon",
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
      d="M12 8C10.1362 8 8.57006 9.27477 8.12602 11H3C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H8.12602C8.57006 14.7252 10.1362 16 12 16C13.8638 16 15.4299 14.7252 15.874 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H15.874C15.4299 9.27477 13.8638 8 12 8Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pigitcommitsolid;
