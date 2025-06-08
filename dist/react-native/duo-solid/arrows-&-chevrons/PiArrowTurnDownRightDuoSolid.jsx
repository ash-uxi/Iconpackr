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
 * Piarrowturndownrightduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowturndownrightduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow turn down right icon",
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
      fill={color || "#000"}
      d="M13.156 10.17a1 1 0 0 1 1.58-.974 26.2 26.2 0 0 1 4.87 4.684 1.79 1.79 0 0 1 0 2.24 26.2 26.2 0 0 1-4.87 4.684 1 1 0 0 1-1.58-.973c.162-.942.238-1.388.296-1.831a23 23 0 0 0 0-6 49 49 0 0 0-.296-1.83"
    />{" "}
    <path
      d="M14.649 15H11c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C3 11.2 3 9.8 3 7V4"
      opacity={0.28}
    />
  </Svg>
);

export default Piarrowturndownrightduosolid;
