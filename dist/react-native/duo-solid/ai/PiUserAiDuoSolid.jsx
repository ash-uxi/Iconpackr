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
 * Piuseraiduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuseraiduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user ai icon",
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
      d="M13 21C13 20.4477 13.4477 20 14 20H14.001C14.5533 20 15.001 20.4477 15.001 21C15.001 21.5523 14.5533 22 14.001 22H14C13.4477 22 13 21.5523 13 21Z"
      fill={color || "#000"}
    />{" "}
    <path
      d="M14.3722 14H8C5.23858 14 3 16.2386 3 19C3 20.6569 4.34315 22 6 22H11.1707C11.0602 21.6872 11 21.3506 11 21C11 19.9376 11.5523 19.0041 12.3854 18.4711C12.1379 18.0313 12 17.5271 12 17C12 15.768 12.7532 14.6612 13.8993 14.2092C14.0998 14.1301 14.2537 14.0603 14.3722 14Z"
      fill={color || "#000"}
      opacity={0.28}
    />{" "}
    <path
      d="M18 13C18.4107 13 18.7796 13.2511 18.9303 13.6331C19.2232 14.3758 19.4962 14.8239 19.8259 15.156C20.1551 15.4876 20.607 15.77 21.3669 16.0697C21.7489 16.2204 22 16.5893 22 17C22 17.4107 21.7489 17.7796 21.3669 17.9303C20.607 18.23 20.1551 18.5124 19.8259 18.844C19.4962 19.1761 19.2232 19.6242 18.9303 20.3669C18.7796 20.7489 18.4107 21 18 21C17.5893 21 17.2204 20.7489 17.0697 20.3669C16.7768 19.6242 16.5038 19.1761 16.1741 18.844C15.8449 18.5124 15.393 18.23 14.6331 17.9303C14.2511 17.7796 14 17.4107 14 17C14 16.5893 14.2511 16.2204 14.6331 16.0697C15.393 15.77 15.8449 15.4876 16.1741 15.156C16.5038 14.8239 16.7768 14.3758 17.0697 13.6331C17.2204 13.2511 17.5893 13 18 13Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Piuseraiduosolid;
