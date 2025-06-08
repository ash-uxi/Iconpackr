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
 * Picreditcardremoveduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picreditcardremoveduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "credit card remove icon",
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
    <path d="M21.995 9H2.005M9 13H6m10 6h6" />{" "}
    <path
      fill={color || "#000"}
      d="M8.357 3h7.286c1.084 0 1.958 0 2.666.058.729.06 1.369.185 1.961.487a5 5 0 0 1 2.185 2.185c.302.592.428 1.233.487 1.961C23 8.4 23 9.273 23 10.357v3.286c0 1.006 0 1.832-.046 2.512-.3-.1-.62-.155-.954-.155h-6a3 3 0 0 0-2.236 5H8.357c-1.084 0-1.958 0-2.666-.058-.728-.06-1.369-.185-1.961-.487a5 5 0 0 1-2.185-2.185c-.302-.592-.428-1.232-.487-1.961C1 15.6 1 14.727 1 13.643v-3.286c0-1.084 0-1.958.058-2.666.06-.728.185-1.369.487-1.96A5 5 0 0 1 3.73 3.544c.592-.302 1.233-.428 1.961-.487C6.4 3 7.273 3 8.357 3"
      opacity={0.28}
    />
  </Svg>
);

export default Picreditcardremoveduosolid;
