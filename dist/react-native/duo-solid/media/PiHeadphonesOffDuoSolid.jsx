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
 * Piheadphonesoffduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheadphonesoffduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "headphones off icon",
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
    <g fill={color || "#000"} opacity={0.28}>
      {" "}
      <path d="M12 4a8.51 8.51 0 0 0-8.502 8.101 3.38 3.38 0 0 1 5.042 1.932l.47 1.642a1 1 0 0 1-.253.983l-3.801 3.8a1 1 0 0 1-1.588-.232 3.4 3.4 0 0 1-.274-.674l-1.042-3.634a10.5 10.5 0 0 1-.564-3.406C1.488 6.706 6.194 2 12 2c2.758 0 5.27 1.064 7.145 2.802a1 1 0 0 1-1.36 1.466A8.48 8.48 0 0 0 12 4M21.713 8.486a1 1 0 0 0-1.847.767c.366.883.589 1.842.636 2.848a3.38 3.38 0 0 0-5.042 1.932L14.41 17.69a3.378 3.378 0 1 0 6.495 1.862l1.042-3.633a10.5 10.5 0 0 0 .564-3.407c0-1.424-.284-2.784-.799-4.026" />{" "}
    </g>{" "}
    <path d="M2 22 22 2" />
  </Svg>
);

export default Piheadphonesoffduosolid;
