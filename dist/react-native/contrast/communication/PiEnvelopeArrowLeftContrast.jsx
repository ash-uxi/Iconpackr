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
 * Pienvelopearrowleftcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pienvelopearrowleftcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "envelope arrow left icon",
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
      d="M14 4h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 6.73C2 7.8 2 9.2 2 12s0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 20 7.2 20 10 20h3c0-.803.27-1.608.804-2.268a15.9 15.9 0 0 1 2.806-2.702 3 3 0 0 1 4.438.97h.799c.153-.933.153-2.166.153-4 0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C18.2 4 16.8 4 14 4"
      opacity={0.28}
    />
    <path d="M18.41 22.573a12.9 12.9 0 0 1-2.275-2.191.6.6 0 0 1-.135-.38m2.41-2.572c-.846.634-1.61 1.37-2.275 2.191a.6.6 0 0 0-.135.38m0 0h6M12 20h-2c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 16.2 2 14.8 2 12c0-1.994 0-3.278.197-4.238m19.606 0-5.508 3.505c-1.557.99-2.335 1.486-3.171 1.678a5 5 0 0 1-2.248 0c-.836-.192-1.614-.688-3.171-1.678L2.197 7.762m19.606 0C22 8.722 22 10.006 22 12c0 1.524 0 2.633-.088 3.5m-.109-7.738a4 4 0 0 0-.348-1.032 5 5 0 0 0-2.185-2.185C18.2 4 16.8 4 14 4h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 6.73a4 4 0 0 0-.348 1.032" />
  </Svg>
);

export default Pienvelopearrowleftcontrast;
