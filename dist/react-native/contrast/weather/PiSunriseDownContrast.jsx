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
 * Pisunrisedowncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisunrisedowncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "sunrise down icon",
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
      fillRule="evenodd"
      d="M16.004 20.996a5 5 0 1 0-8.012-.007z"
      clipRule="evenodd"
      opacity={0.28}
    />
    <path d="M16.004 20.996a5 5 0 1 0-8.012-.007m8.012.007-8.013-.007m8.013.007L21 21m-13.009-.011L3 20.984M9.557 6.71c.602.804 1.302 1.53 2.082 2.162A.57.57 0 0 0 12 9m2.443-2.29a12.2 12.2 0 0 1-2.082 2.162A.57.57 0 0 1 12 9m0 0V3M2 17h1m18 0h1M4.472 10.422l.753.658m14.31-.658-.754.658" />
  </Svg>
);

export default Pisunrisedowncontrast;
