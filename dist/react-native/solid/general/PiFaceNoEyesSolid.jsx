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
 * Pifacenoeyessolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifacenoeyessolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "face no eyes icon",
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
      d="M1.8501 11.9996C1.8501 6.39392 6.39441 1.84961 12.0001 1.84961C17.6058 1.84961 22.1501 6.39392 22.1501 11.9996C22.1501 17.6053 17.6058 22.1496 12.0001 22.1496C6.39441 22.1496 1.8501 17.6053 1.8501 11.9996ZM9.14342 13.8996C8.7568 13.5052 8.12366 13.4989 7.72928 13.8855C7.33489 14.2721 7.3286 14.9053 7.71522 15.2997C8.80301 16.4093 10.3218 17.0996 12 17.0996C13.6783 17.0996 15.1971 16.4093 16.2849 15.2997C16.6715 14.9053 16.6652 14.2721 16.2708 13.8855C15.8764 13.4989 15.2433 13.5052 14.8567 13.8996C14.1295 14.6413 13.1192 15.0996 12 15.0996C10.8809 15.0996 9.87055 14.6413 9.14342 13.8996Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pifacenoeyessolid;
