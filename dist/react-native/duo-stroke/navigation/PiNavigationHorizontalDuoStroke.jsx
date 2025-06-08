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
 * Pinavigationhorizontalduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pinavigationhorizontalduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "navigation horizontal icon",
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
      d="M10.4399 17.7315L5.35705 20.9083C4.91098 21.1871 4.35019 20.7885 4.46677 20.2756L4.59372 19.717C5.92371 13.865 8.27244 8.29255 11.5326 3.25412C11.7518 2.91529 12.2476 2.91529 12.4668 3.25412C15.727 8.29255 18.0757 13.865 19.4057 19.717L19.5326 20.2756C19.6492 20.7885 19.0884 21.1871 18.6424 20.9083L13.5595 17.7315C12.6052 17.135 11.3943 17.135 10.4399 17.7315Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M19.5326 20.2756C19.6492 20.7886 19.0884 21.1871 18.6424 20.9083L13.5595 17.7315C12.6052 17.1351 11.3943 17.1351 10.4399 17.7315L5.35705 20.9083C4.91098 21.1871 4.35019 20.7886 4.46677 20.2756"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pinavigationhorizontalduostroke;
