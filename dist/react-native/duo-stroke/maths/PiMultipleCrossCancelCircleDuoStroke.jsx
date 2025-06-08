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
 * Pimultiplecrosscancelcircleduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimultiplecrosscancelcircleduostroke = ({
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
      d="M2.84961 11.9999C2.84961 17.0533 6.9462 21.1499 11.9996 21.1499C17.053 21.1499 21.1496 17.0533 21.1496 11.9999C21.1496 6.94645 17.053 2.84985 11.9996 2.84985C6.9462 2.84985 2.84961 6.94645 2.84961 11.9999Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9 15L12 12M12 12L15 9M12 12L9 9M12 12L15 15"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimultiplecrosscancelcircleduostroke;
