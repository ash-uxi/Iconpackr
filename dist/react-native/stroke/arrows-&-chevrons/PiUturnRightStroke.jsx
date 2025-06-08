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
 * Piuturnrightstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuturnrightstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "uturn right icon",
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
      d="M15.9691 3.91602C17.4233 4.97466 18.7294 6.21138 19.8551 7.59488C19.9517 7.71356 20 7.85646 20 7.99935M15.9691 12.0827C17.4233 11.024 18.7294 9.78732 19.8551 8.40382C19.9517 8.28513 20 8.14224 20 7.99935M20 7.99935H9C6.23858 7.99935 4 10.2379 4 12.9993C4 15.7608 6.23858 17.9993 9 17.9993H12"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piuturnrightstroke;
