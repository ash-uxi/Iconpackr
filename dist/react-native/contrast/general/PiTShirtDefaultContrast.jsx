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
 * Pitshirtdefaultcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitshirtdefaultcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "t shirt default icon",
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
      d="M1.5 6 8 3l1.09.272a12 12 0 0 0 5.82 0L16 3l6.5 3-1.5 5-3-1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V10l-3 1z"
      opacity={0.28}
    />
    <path d="M1.5 6 8 3l1.09.272a12 12 0 0 0 5.82 0L16 3l6.5 3-1.5 5-3-1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V10l-3 1z" />
  </Svg>
);

export default Pitshirtdefaultcontrast;
