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
 * Piacleafcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piacleafcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ac leaf icon",
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
      <path d="M20 4H4a2 2 0 0 0-2 2v6h20V6a2 2 0 0 0-2-2M16.677 16.072c-1.473.85-2.025 2.65-1.383 3.76.64 1.11 2.476 1.532 3.948.682s3.036-3.974 2.716-4.53c-.32-.555-3.81-.762-5.281.088" />
    </g>
    <path d="M18 8h-2m-1.198 14 .04-.11a6.13 6.13 0 0 1 2.317-2.963M22 12V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6zm-5.323 4.072c-1.473.85-2.025 2.65-1.383 3.76.64 1.11 2.476 1.532 3.948.682s3.036-3.974 2.716-4.53c-.32-.555-3.81-.762-5.281.088" />
  </Svg>
);

export default Piacleafcontrast;
