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
 * Piuserdefaultduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserdefaultduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user default icon",
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
      d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2Z"
      fill={color || "#000"}
    />{" "}
    <path
      d="M8 14C5.23858 14 3 16.2386 3 19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19C21 16.2386 18.7614 14 16 14H8Z"
      fill={color || "#000"}
      opacity={0.28}
    />
  </Svg>
);

export default Piuserdefaultduosolid;
