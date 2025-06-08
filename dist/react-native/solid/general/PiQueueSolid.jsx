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
 * Piqueuesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piqueuesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "queue icon",
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
      d="M3 14C2.44772 14 2 14.4477 2 15C2 15.5523 2.44772 16 3 16H21C21.5523 16 22 15.5523 22 15C22 14.4477 21.5523 14 21 14H3Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M3 19C2.44772 19 2 19.4477 2 20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20C22 19.4477 21.5523 19 21 19H3Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M6 3C3.79086 3 2 4.79086 2 7C2 9.20914 3.79086 11 6 11H18C20.2091 11 22 9.20914 22 7C22 4.79086 20.2091 3 18 3H6Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piqueuesolid;
