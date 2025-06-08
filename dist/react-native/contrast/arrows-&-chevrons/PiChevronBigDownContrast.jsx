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
 * Pichevronbigdowncontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronbigdowncontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron big down icon",
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
      d="M11.49 14.817A30.6 30.6 0 0 1 6 9c3.993.333 8.007.333 12 0a30.6 30.6 0 0 1-5.49 5.817.8.8 0 0 1-1.02 0"
      opacity={0.28}
    />
    <path d="M11.49 14.817A30.6 30.6 0 0 1 6 9c3.993.333 8.007.333 12 0a30.6 30.6 0 0 1-5.49 5.817.8.8 0 0 1-1.02 0" />
  </Svg>
);

export default Pichevronbigdowncontrast;
