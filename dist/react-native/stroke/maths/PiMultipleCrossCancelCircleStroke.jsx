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
 * Pimultiplecrosscancelcirclestroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimultiplecrosscancelcirclestroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "multiple cross cancel circle icon",
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
      d="M8.99976 15L11.9998 12M11.9998 12L14.9998 9M11.9998 12L8.99976 9M11.9998 12L14.9998 15M11.9996 21.1499C6.9462 21.1499 2.84961 17.0533 2.84961 11.9999C2.84961 6.94645 6.9462 2.84985 11.9996 2.84985C17.053 2.84985 21.1496 6.94645 21.1496 11.9999C21.1496 17.0533 17.053 21.1499 11.9996 21.1499Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimultiplecrosscancelcirclestroke;
