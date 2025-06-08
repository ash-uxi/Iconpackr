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
 * Piuserarrowupduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserarrowupduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user arrow up icon",
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
      d="M14.4174 14H7C4.23858 14 2 16.2386 2 19C2 20.6569 3.34315 22 5 22H16V19.8117C15.3729 19.8122 14.7403 19.6168 14.2 19.2115C12.8745 18.2174 12.6059 16.337 13.6 15.0115C13.8604 14.6643 14.1331 14.3269 14.4174 14Z"
      fill={color || "#000"}
      opacity={0.28}
    />{" "}
    <path
      d="M19 13C18.6199 13 18.2392 13.1274 17.9269 13.3805C16.9056 14.208 15.9896 15.1587 15.2 16.2115C14.8686 16.6534 14.9582 17.2802 15.4 17.6115C15.8418 17.9429 16.4686 17.8534 16.8 17.4115C17.1693 16.9191 17.5703 16.4522 18 16.0136V21C18 21.5523 18.4477 22 19 22C19.5523 22 20 21.5523 20 21V16.0136C20.4297 16.4522 20.8307 16.9191 21.2 17.4115C21.5314 17.8534 22.1582 17.9429 22.6 17.6115C23.0418 17.2802 23.1314 16.6534 22.8 16.2115C22.0104 15.1587 21.0944 14.208 20.0731 13.3804C19.7608 13.1274 19.3801 13 19 13Z"
      fill={color || "#000"}
    />{" "}
    <path
      d="M6 7C6 4.23858 8.23858 2 11 2C13.7614 2 16 4.23858 16 7C16 9.76142 13.7614 12 11 12C8.23858 12 6 9.76142 6 7Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Piuserarrowupduosolid;
