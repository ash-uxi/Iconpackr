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
 * Pilistaigeneratedsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilistaigeneratedsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "list ai generated icon",
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
      d="M13 20C13 19.4477 13.4477 19 14 19H14.001C14.5533 19 15.001 19.4477 15.001 20C15.001 20.5523 14.5533 21 14.001 21H14C13.4477 21 13 20.5523 13 20Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M18 12C18.4107 12 18.7796 12.2511 18.9303 12.6331C19.2232 13.3758 19.4962 13.8239 19.8259 14.156C20.1551 14.4876 20.607 14.77 21.3669 15.0697C21.7489 15.2204 22 15.5893 22 16C22 16.4107 21.7489 16.7796 21.3669 16.9303C20.607 17.23 20.1551 17.5124 19.8259 17.844C19.4962 18.1761 19.2232 18.6242 18.9303 19.3669C18.7796 19.7489 18.4107 20 18 20C17.5893 20 17.2204 19.7489 17.0697 19.3669C16.7768 18.6242 16.5038 18.1761 16.1741 17.844C15.8449 17.5124 15.393 17.23 14.6331 16.9303C14.2511 16.7796 14 16.4107 14 16C14 15.5893 14.2511 15.2204 14.6331 15.0697C15.393 14.77 15.8449 14.4876 16.1741 14.156C16.5038 13.8239 16.7768 13.3758 17.0697 12.6331C17.2204 12.2511 17.5893 12 18 12Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M3 12C3 11.4477 3.44772 11 4 11H13.5C14.0523 11 14.5 11.4477 14.5 12C14.5 12.5523 14.0523 13 13.5 13H4C3.44772 13 3 12.5523 3 12Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M3 18C3 17.4477 3.44772 17 4 17H10C10.5523 17 11 17.4477 11 18C11 18.5523 10.5523 19 10 19H4C3.44772 19 3 18.5523 3 18Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pilistaigeneratedsolid;
