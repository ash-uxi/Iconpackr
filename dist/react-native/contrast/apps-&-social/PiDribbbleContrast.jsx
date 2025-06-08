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
 * Pidribbblecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidribbblecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "dribbble icon",
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
    <path d="M12.195 9.418a16.43 16.43 0 0 1-9.184 2.127m9.184-2.127a35 35 0 0 1 1.661 3.677m-1.661-3.677a35 35 0 0 0-3.726-5.699m3.726 5.699a16.6 16.6 0 0 0 5.181-4.637m-3.52 8.314a16.646 16.646 0 0 1 7.129-.574m-7.129.574a35 35 0 0 1 1.894 7.089m-1.894-7.089a16.52 16.52 0 0 0-8.02 5.463M8.469 3.719A9 9 0 0 1 12 3a8.96 8.96 0 0 1 5.376 1.781M8.469 3.72a9 9 0 0 0-5.458 7.826M17.376 4.78a8.99 8.99 0 0 1 3.61 7.74m0 0a9 9 0 0 1-5.236 7.663m0 0A9 9 0 0 1 12 21a8.97 8.97 0 0 1-6.164-2.442m0 0a8.98 8.98 0 0 1-2.825-7.013" />
    <path
      fill={color}
      d="M21 12a9 9 0 1 0-18 0 9 9 0 0 0 18 0"
      opacity={0.28}
    />
  </Svg>
);

export default Pidribbblecontrast;
