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
 * Pinotioncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinotioncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "notion icon",
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
    <path d="M10.885 17.4v-6.794c0-.125 0-.187.024-.213a.09.09 0 0 1 .08-.029c.034.006.073.054.152.15l5.338 6.571c.079.097.118.145.152.15a.09.09 0 0 0 .08-.028c.024-.026.024-.088.024-.213V10.2m3.56-2.14a3.6 3.6 0 0 0-1.26-1.068c-.77-.392-1.779-.392-3.795-.392h-2.88c-2.016 0-3.024 0-3.794.392a3.6 3.6 0 0 0-1.574 1.574c-.392.77-.392 1.778-.392 3.794v2.88c0 2.016 0 3.024.392 3.794A3.6 3.6 0 0 0 7.82 20.1M20.295 8.06q.176.239.313.506c.392.77.392 1.778.392 3.794v2.88c0 2.016 0 3.024-.392 3.794a3.6 3.6 0 0 1-1.574 1.574c-.77.392-1.778.392-3.794.392h-2.88c-2.016 0-3.024 0-3.794-.392a3.6 3.6 0 0 1-.747-.508M20.295 8.06l-2.612-3.476a3.6 3.6 0 0 0-1.349-1.192C15.564 3 14.556 3 12.54 3H8.76c-2.016 0-3.024 0-3.794.392a3.6 3.6 0 0 0-1.574 1.574C3 5.736 3 6.744 3 8.76v3.78c0 2.016 0 3.024.392 3.794a3.6 3.6 0 0 0 1.109 1.29L7.819 20.1" />
    <path
      fill={color}
      d="M15.24 6.6h-2.88c-2.016 0-3.024 0-3.794.392a3.6 3.6 0 0 0-1.574 1.574c-.392.77-.392 1.778-.392 3.794v2.88c0 2.016 0 3.024.392 3.794a3.6 3.6 0 0 0 1.574 1.574c.77.392 1.778.392 3.794.392h2.88c2.016 0 3.024 0 3.795-.392a3.6 3.6 0 0 0 1.573-1.574c.392-.77.392-1.778.392-3.794v-2.88c0-2.016 0-3.024-.392-3.794a3.6 3.6 0 0 0-1.573-1.574c-.77-.392-1.779-.392-3.795-.392"
      opacity={0.28}
    />
  </Svg>
);

export default Pinotioncontrast;
