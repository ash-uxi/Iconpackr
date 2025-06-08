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
 * Pitextquotesclosesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitextquotesclosesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "text quotes close icon",
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
      d="M5.42471 16.88C6.53094 16.1017 7.44034 15.0644 8.06513 13.8566C7.72601 13.9501 7.36884 14 7 14C4.79086 14 3 12.2091 3 10C3 7.79086 4.79086 6 7 6C9.20901 6 11 7.79042 11 9.99969C11 13.5215 9.24947 16.6344 6.57553 18.5157C6.12384 18.8335 5.50005 18.7249 5.18226 18.2732C4.86447 17.8215 4.97302 17.1977 5.42471 16.88ZM15.4247 16.88C16.5309 16.1017 17.4403 15.0644 18.0651 13.8566C17.726 13.9501 17.3688 14 17 14C14.7909 14 13 12.2091 13 10C13 7.79086 14.7909 6 17 6C19.209 6 21 7.79042 21 9.99969C21 13.5215 19.2495 16.6344 16.5755 18.5157C16.1238 18.8335 15.5 18.7249 15.1823 18.2732C14.8645 17.8215 14.973 17.1977 15.4247 16.88Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pitextquotesclosesolid;
