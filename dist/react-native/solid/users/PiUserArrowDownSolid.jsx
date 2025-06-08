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
 * Piuserarrowdownsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuserarrowdownsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user arrow down icon",
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
      d="M11 2C8.23858 2 6 4.23858 6 7C6 9.76142 8.23858 12 11 12C13.7614 12 16 9.76142 16 7C16 4.23858 13.7614 2 11 2Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M16 14.1C15.6769 14.0344 15.3425 14 15 14H7C4.23858 14 2 16.2386 2 19C2 20.6569 3.34315 22 5 22H14.4174C14.1331 21.6731 13.8604 21.3357 13.6 20.9885C12.6059 19.663 12.8745 17.7826 14.2 16.7885C14.7403 16.3832 15.3729 16.1878 16 16.1883V14.1Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M19 23C18.6199 23 18.2392 22.8726 17.9269 22.6195C16.9056 21.792 15.9896 20.8413 15.2 19.7885C14.8686 19.3466 14.9582 18.7198 15.4 18.3885C15.8418 18.0571 16.4686 18.1466 16.8 18.5885C17.1693 19.0809 17.5703 19.5478 18 19.9864V15C18 14.4477 18.4477 14 19 14C19.5523 14 20 14.4477 20 15V19.9864C20.4297 19.5478 20.8307 19.0809 21.2 18.5885C21.5314 18.1466 22.1582 18.0571 22.6 18.3885C23.0418 18.7198 23.1314 19.3466 22.8 19.7885C22.0104 20.8413 21.0944 21.792 20.0731 22.6196C19.7608 22.8726 19.3801 23 19 23Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piuserarrowdownsolid;
