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
 * Pivolumeoffduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivolumeoffduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "volume off icon",
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
      <path d="M18 5.108c0-2.525-2.853-3.993-4.907-2.526l-2.813 2.01a3.9 3.9 0 0 1-1.514.655A5.93 5.93 0 0 0 4 11.06v1.918c0 1.949.949 3.71 2.444 4.798a1 1 0 0 0 1.296-.102l9.967-9.968A1 1 0 0 0 18 7zM18 12.648a1 1 0 0 0-1.707-.707l-6.05 6.05a1 1 0 0 0 .125 1.521l2.725 1.946C15.147 22.925 18 21.457 18 18.933z" />{" "}
    </g>{" "}
    <path d="M22 2 2 22" />
  </Svg>
);

export default Pivolumeoffduosolid;
