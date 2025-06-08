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
 * Pileafduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pileafduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "leaf icon",
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
      d="M13 10.5C13 10.5 5 14 5 20.5"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5.33932 18.2119C0.33921 2.71194 15.5002 7 19.0002 3C22.0816 14.5 17.8393 22.7119 5.33932 18.2119Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pileafduostroke;
