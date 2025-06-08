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
 * Pipiechartrosecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipiechartrosecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "piechart rose icon",
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
      d="M10.995 2.864c5.598 0 10.137 4.538 10.137 10.137h-1.274a8.863 8.863 0 0 1-8.863 8.863v-1.108A7.755 7.755 0 0 1 3.24 13h1.108a6.647 6.647 0 0 1 6.647-6.647z"
      opacity={0.28}
    />
    <path d="M19.858 13a8.863 8.863 0 0 1-8.863 8.864v-1.108M19.858 13h1.274c0-5.599-4.539-10.137-10.137-10.137v3.49M19.858 13h-8.863m0 7.755A7.755 7.755 0 0 1 3.24 13h1.108m6.647 7.755V13m-6.647 0a6.647 6.647 0 0 1 6.647-6.647M4.348 13h6.647m0-6.647V13" />
  </Svg>
);

export default Pipiechartrosecontrast;
