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
 * Piheadphonesoffcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheadphonesoffcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "headphones off icon",
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
    <g fill={color} opacity={0.28}>
      <path d="m16.421 14.308-1.048 3.658a2.378 2.378 0 0 0 4.571 1.31l1.05-3.658a2.378 2.378 0 0 0-4.573-1.31M7.579 14.308a2.378 2.378 0 0 0-4.573 1.31l1.05 3.658q.073.253.193.475l3.8-3.8z" />
    </g>
    <path d="M20.994 15.618a2.378 2.378 0 0 0-4.573-1.31l-1.048 3.658a2.378 2.378 0 0 0 4.571 1.31zm0 0a9.5 9.5 0 0 0 .518-3.106c0-1.29-.257-2.52-.722-3.643m.204 6.749-.008.022m-17.98-.023a2.378 2.378 0 0 1 4.573-1.309l.47 1.642m-5.043-.333.018.052m-.018-.052a9.5 9.5 0 0 1-.518-3.105A9.51 9.51 0 0 1 12 3c2.496 0 4.768.962 6.465 2.535M3.006 15.617l1.05 3.66q.073.252.193.474M2 22l2.249-2.249M22 2l-3.535 3.535m0 0L8.05 15.95m0 0-3.801 3.801" />
  </Svg>
);

export default Piheadphonesoffcontrast;
