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
 * Pienvelopefastduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pienvelopefastduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "envelope fast icon",
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
      d="M14.0439 3C15.4069 2.99999 16.491 2.99999 17.3656 3.07144C18.2612 3.14462 19.0248 3.29768 19.7241 3.65396C20.7054 4.15397 21.5272 4.91285 22.1032 5.84422C22.2394 6.06441 22.1613 6.3485 21.9429 6.48749L15.7583 10.4231C14.1386 11.4538 13.5282 11.826 12.8991 11.9711C12.3076 12.1076 11.6927 12.1076 11.1011 11.9711C10.472 11.826 9.86162 11.4538 8.242 10.4231L2.05743 6.48751C1.839 6.34851 1.76092 6.06443 1.89709 5.84423C2.47304 4.91286 3.29488 4.15397 4.2762 3.65396C4.97545 3.29768 5.73912 3.14462 6.63472 3.07144C7.5093 2.99999 8.59332 2.99999 9.95635 3H14.0439Z"
      fill={color || "#000"}
    />{" "}
    <path
      d="M22.3401 8.60527C22.5947 8.44323 22.9286 8.60395 22.9477 8.90516C23.0001 9.72888 23.0001 10.7019 23 11.872L23 12.0438C23 13.4068 23 14.4909 22.9286 15.3655C22.8554 16.2611 22.7023 17.0247 22.346 17.724C21.7708 18.8529 20.8529 19.7708 19.724 20.3461C19.0247 20.7024 18.261 20.8554 17.3654 20.9286C16.4909 21 15.4069 21 14.0439 21H4C3.44772 21 3 20.5523 3 20C3 19.4477 3.44772 19 4 19H9C9.55229 19 10 18.5523 10 18C10 17.4477 9.55229 17 9 17H2C1.44772 17 1 16.5523 1 16C1 15.4477 1.44772 15 2 15H5C5.55228 15 6 14.5523 6 14C6 13.4477 5.55228 13 5 13H1C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11C1.00257 10.2069 1.01348 9.5151 1.05229 8.90514C1.07145 8.60395 1.40528 8.44324 1.6599 8.60527L7.32767 12.2121C8.72998 13.105 9.64539 13.6879 10.6515 13.92C11.5388 14.1246 12.4612 14.1246 13.3485 13.92C14.3546 13.6879 15.27 13.105 16.6723 12.2121L22.3401 8.60527Z"
      fill={color || "#000"}
      opacity={0.28}
    />
  </Svg>
);

export default Pienvelopefastduosolid;
