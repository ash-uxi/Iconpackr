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
 * Pifloppydefaultduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifloppydefaultduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "floppy default icon",
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
    <path d="M11 7H7m10 14v-3.2c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C14.72 13 13.88 13 12.2 13h-.4c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C7 15.28 7 16.12 7 17.8V21" />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M9.4 2h-.043C8.273 2 7.4 2 6.691 2.058c-.728.06-1.369.185-1.96.487A5 5 0 0 0 2.544 4.73c-.302.592-.428 1.233-.487 1.961C2 7.4 2 8.273 2 9.357V17a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V9.053c0-.576-.06-1.108-.275-1.626-.214-.517-.547-.936-.955-1.343L17.916 3.23c-.407-.408-.826-.741-1.343-.955C16.055 2.06 15.523 2 14.947 2z"
      clipRule="evenodd"
      opacity={0.28}
    />
  </Svg>
);

export default Pifloppydefaultduosolid;
