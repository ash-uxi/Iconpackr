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
 * Pispatialmarkduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pispatialmarkduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "spatial mark icon",
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
      fillRule="evenodd"
      d="m22 14.85-5.399-3.117v8.855l-2 1.111v-5.998l-2.107 1.17-5.779 3.337-2.038-1.133 5.295-3.057-2.057-1.142-.014-.009L2 11.46V9.151l5.401 3.118V3.411l2-1.111v6.002l2.107-1.17 5.78-3.338 2.039 1.133-5.297 3.058 2.057 1.142.014.008L22 12.541zm-9.999-5.705 2.6 1.445v2.823l-2.6 1.444-2.6-1.444V10.59z"
      clipRule="evenodd"
      fill="none"
    />
    <path
      d="M4.543 6.143A3 3 0 0 0 3 8.765v6.47a3 3 0 0 0 1.543 2.622l6 3.334a3 3 0 0 0 2.914 0l6-3.334A3 3 0 0 0 21 15.235v-6.47a3 3 0 0 0-1.543-2.622l-6-3.334a3 3 0 0 0-2.914 0z"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pispatialmarkduostroke;
