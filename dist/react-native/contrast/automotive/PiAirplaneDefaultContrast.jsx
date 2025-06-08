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
 * Piairplanedefaultcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piairplanedefaultcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "airplane default icon",
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
      fill={color}
      d="M7 22c1.49-.298 4.52-.474 4.95-.497a1 1 0 0 1 .1 0c.43.023 3.46.2 4.95.497v-.532a1 1 0 0 0-.36-.768L14 18.5l.5-3.5 7.5 2v-.5a3 3 0 0 0-1.2-2.4L14 9V4c0-1.105-1.5-2-2-2s-2 .895-2 2v5l-6.8 5.1A3 3 0 0 0 2 16.5v.5l7.5-2 .5 3.5-2.64 2.2a1 1 0 0 0-.36.768z"
      opacity={0.28}
    />
    <path d="M7 22c1.48-.296 4.48-.498 4.94-.528a1 1 0 0 1 .12 0c.46.03 3.46.232 4.94.528v-.532a1 1 0 0 0-.36-.768L14 18.5l.5-3.5 7.5 2v-.5a3 3 0 0 0-1.2-2.4L14 9V4c0-1.105-1.5-2-2-2s-2 .895-2 2v5l-6.8 5.1A3 3 0 0 0 2 16.5v.5l7.5-2 .5 3.5-2.64 2.2a1 1 0 0 0-.36.768z" />
  </Svg>
);

export default Piairplanedefaultcontrast;
