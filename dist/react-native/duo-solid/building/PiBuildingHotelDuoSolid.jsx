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
 * Pibuildinghotelduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibuildinghotelduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "building hotel icon",
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
      fillRule="evenodd"
      d="M20.386 6.29A14 14 0 0 0 20 6v13.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 19.5V6q-.196.14-.386.29a1 1 0 1 1-1.228-1.58 15.67 15.67 0 0 1 19.228 0 1 1 0 0 1-1.228 1.58"
      clipRule="evenodd"
      opacity={0.28}
    />{" "}
    <path d="M10 21v-4.435M14 21v-4.435m.829.636a4 4 0 0 0-.83-.636m-4.827.636a4 4 0 0 1 .828-.636m4 0a4 4 0 0 0-4 0M8 7v.01M8 10v.01M8 13v.01M12 7v.01M12 10v.01M12 13v.01M16 7v.01M16 10v.01M16 13v.01" />
  </Svg>
);

export default Pibuildinghotelduosolid;
