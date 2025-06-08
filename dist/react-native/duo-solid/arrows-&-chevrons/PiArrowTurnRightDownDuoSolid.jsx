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
 * Piarrowturnrightdownduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowturnrightdownduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow turn right down icon",
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
      d="M14 15.649V12c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C10.2 4 8.8 4 6 4H3"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M9.17 14.156a1 1 0 0 0-.974 1.58 26.2 26.2 0 0 0 4.684 4.87 1.79 1.79 0 0 0 2.24 0 26.2 26.2 0 0 0 4.684-4.87 1 1 0 0 0-.973-1.58c-.942.162-1.388.238-1.831.297a23 23 0 0 1-6 0 49 49 0 0 1-1.83-.297"
    />
  </Svg>
);

export default Piarrowturnrightdownduosolid;
