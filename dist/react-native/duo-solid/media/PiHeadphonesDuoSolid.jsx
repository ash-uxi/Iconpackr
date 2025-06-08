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
 * Piheadphonesduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheadphonesduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "headphones icon",
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
      d="M19.638 11.716a3.38 3.38 0 0 0-4.178 2.316L14.41 17.69a3.378 3.378 0 0 0 6.494 1.862l1.05-3.657a3.38 3.38 0 0 0-2.317-4.179"
    />{" "}
    <path
      d="M3.024 15.669a9.5 9.5 0 0 1-.536-3.157 9.512 9.512 0 0 1 19.024 0 9.5 9.5 0 0 1-.526 3.128"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M8.54 14.032a3.378 3.378 0 0 0-6.495 1.863l1.05 3.657a3.378 3.378 0 1 0 6.493-1.862z"
    />
  </Svg>
);

export default Piheadphonesduosolid;
