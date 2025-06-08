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
 * Picreditcardarrowleftduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picreditcardarrowleftduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "credit card arrow left icon",
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
    <path d="M18.41 22.573a12.9 12.9 0 0 1-2.275-2.191.6.6 0 0 1-.135-.38m2.41-2.572c-.846.634-1.61 1.37-2.275 2.191a.6.6 0 0 0-.135.38m0 0h6M2 9h20M6 13h3" />{" "}
    <path
      fill={color || "#000"}
      d="M8.357 3h7.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961C23 8.4 23 9.273 23 10.357v3.286c0 1.084 0 1.958-.058 2.666a8 8 0 0 1-.105.81 3 3 0 0 0-.837-.118h-.62a3 3 0 0 0-4.77-1.972 15.9 15.9 0 0 0-2.806 2.703A3.6 3.6 0 0 0 13.141 21H8.357c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.961-.487a5 5 0 0 1-2.185-2.185c-.302-.592-.428-1.232-.487-1.961C1 15.6 1 14.727 1 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 3.73 3.544c.592-.302 1.233-.428 1.961-.487C6.4 3 7.273 3 8.357 3"
      opacity={0.28}
    />
  </Svg>
);

export default Picreditcardarrowleftduosolid;
