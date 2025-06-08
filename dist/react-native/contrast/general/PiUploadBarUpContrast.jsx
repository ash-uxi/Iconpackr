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
 * Piuploadbarupcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuploadbarupcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "upload bar up icon",
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
    <path d="M12 9.417V16m0-6.583c-2.005 0-4.01.138-6 .413a30.2 30.2 0 0 1 5.406-5.62.95.95 0 0 1 1.188 0A30.2 30.2 0 0 1 18 9.83a44 44 0 0 0-6-.413M19 20H5" />
    <path
      fill={color}
      d="M6 9.83a30.2 30.2 0 0 1 5.406-5.62.95.95 0 0 1 1.188 0A30.2 30.2 0 0 1 18 9.83a43.8 43.8 0 0 0-12 0"
      opacity={0.28}
    />
  </Svg>
);

export default Piuploadbarupcontrast;
