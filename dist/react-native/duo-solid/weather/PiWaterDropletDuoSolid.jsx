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
 * Piwaterdropletduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piwaterdropletduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "water droplet icon",
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
      d="M12.646 2.237a1 1 0 0 0-1.292 0C4.76 7.815 2.94 12.694 4.023 16.405 5.09 20.065 8.823 22 12 22s6.91-1.936 7.977-5.595c1.082-3.71-.738-8.59-7.331-14.168"
      clipRule="evenodd"
      opacity={0.28}
    />{" "}
    <path d="M19.257 14c.218 4.446-3.807 7-7.257 7s-7.475-2.554-7.257-7" />
  </Svg>
);

export default Piwaterdropletduosolid;
