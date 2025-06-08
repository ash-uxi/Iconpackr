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
 * Pitokenduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitokenduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "token icon",
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
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
      fill={color || "#000"}
      opacity={0.28}
    />{" "}
    <path
      d="M12.6951 7.98146C12.2432 7.83463 11.7564 7.83463 11.3045 7.98146C11.0016 8.07988 10.7552 8.2506 10.5284 8.44313C10.3135 8.62555 10.0724 8.86673 9.79283 9.1463L9.14606 9.79307C8.86649 10.0726 8.6253 10.3138 8.44289 10.5287C8.25035 10.7555 8.07964 11.0018 7.98122 11.3047C7.83439 11.7566 7.83439 12.2434 7.98122 12.6953C8.07964 12.9982 8.25035 13.2446 8.44289 13.4714C8.6253 13.6862 8.86648 13.9274 9.14605 14.207L9.79283 14.8537C10.0724 15.1333 10.3135 15.3745 10.5284 15.5569C10.7552 15.7494 11.0016 15.9202 11.3045 16.0186C11.7564 16.1654 12.2432 16.1654 12.6951 16.0186C12.998 15.9202 13.2443 15.7494 13.4711 15.5569C13.686 15.3745 13.9272 15.1333 14.2067 14.8537L14.8535 14.207C15.1331 13.9274 15.3742 13.6862 15.5567 13.4714C15.7492 13.2446 15.9199 12.9982 16.0183 12.6953C16.1652 12.2434 16.1652 11.7566 16.0183 11.3047C15.9199 11.0018 15.7492 10.7555 15.5567 10.5287C15.3742 10.3138 15.1331 10.0726 14.8535 9.79307L14.2067 9.1463C13.9272 8.86673 13.686 8.62555 13.4711 8.44313C13.2443 8.2506 12.998 8.07988 12.6951 7.98146Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Pitokenduosolid;
