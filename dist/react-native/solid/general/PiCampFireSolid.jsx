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
 * Picampfiresolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picampfiresolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "camp fire icon",
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
      fillRule="evenodd"
      d="M13.134 13.338a1 1 0 0 0-1.496.647 6.4 6.4 0 0 1-.575 1.592 8 8 0 0 1-.39-.504 1 1 0 0 0-1.629-.01C8.481 15.845 8 16.874 8 18.034c0 .958.322 1.947 1.006 2.709C9.706 21.52 10.732 22 12 22s2.293-.48 2.994-1.258c.684-.762 1.006-1.75 1.006-2.709 0-1.148-.47-2.166-1.025-2.943s-1.25-1.394-1.841-1.752"
      clipRule="evenodd"
      stroke="none"
    />
    <path
      d="M2 21 12 5.167m0 0L14 2m-2 3.167L22 21M12 5.167 10 2"
      stroke="none"
    />
  </Svg>
);

export default Picampfiresolid;
