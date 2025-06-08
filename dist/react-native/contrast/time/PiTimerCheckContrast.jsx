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
 * Pitimercheckcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitimercheckcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "timer check icon",
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
    <path d="M12 2v4m0 0a8 8 0 1 0 0 16 8 8 0 0 0 0-16m-2-4h4m5.366 3.322 1.06 1.06M9 14.286l2.007 2.005A13.06 13.06 0 0 1 15 12" />
    <path
      fill={color}
      d="M20 14a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
      opacity={0.28}
    />
  </Svg>
);

export default Pitimercheckcontrast;
