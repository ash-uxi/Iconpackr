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
 * Piheadphonescontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheadphonescontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "headphones icon",
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
      <path d="m19.944 19.277 1.05-3.657a2.378 2.378 0 0 0-4.573-1.311l-1.048 3.657a2.378 2.378 0 0 0 4.571 1.311M8.627 17.966 7.58 14.31a2.378 2.378 0 1 0-4.572 1.31l1.049 3.658a2.378 2.378 0 1 0 4.571-1.31" />
    </g>
    <path d="M20.993 15.618a2.378 2.378 0 0 0-4.572-1.31l-1.049 3.658a2.378 2.378 0 1 0 4.572 1.31zm0 0a9.5 9.5 0 0 0 .519-3.106 9.512 9.512 0 1 0-19.024 0c0 1.088.182 2.132.518 3.105m17.987.001-.007.022m-17.98-.023a2.378 2.378 0 0 1 4.573-1.309l1.048 3.658a2.378 2.378 0 0 1-4.571 1.31zm0 0 .018.052" />
  </Svg>
);

export default Piheadphonescontrast;
