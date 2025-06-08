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
 * Pimusicquavernotesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimusicquavernotesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "music quaver note icon",
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
      d="M13 3.64303C13 3.16566 13.5014 2.85709 13.9261 3.06958C15.8098 4.01195 17 5.93853 17 8.04636C17 9.27605 16.652 10.4566 15.9892 11.4416C15.6809 11.8998 15.8024 12.5212 16.2606 12.8295C16.7188 13.1379 17.3402 13.0164 17.6485 12.5582C18.545 11.2259 19 9.65255 19 8.04636C19 5.1816 17.3824 2.56237 14.821 1.28093C13.0647 0.402298 11 1.68059 11 3.64303V15.5318C10.4117 15.1913 9.72865 14.9964 9 14.9964C6.79032 14.9964 5 16.7886 5 18.9982C5 21.2077 6.79032 22.9999 9 22.9999C11.2097 22.9999 13 21.2077 13 18.9982V3.64303Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pimusicquavernotesolid;
