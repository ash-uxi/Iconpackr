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
 * Pipowerdefaultduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipowerdefaultduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "power default icon",
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
    <path d="M12 8V2" stroke={color || "#000"} strokeWidth="2" fill="none" />
    <path
      d="M7.55567 4C4.74888 5.56266 2.8501 8.55959 2.8501 12C2.8501 17.0534 6.94669 21.15 12.0001 21.15C17.0535 21.15 21.1501 17.0534 21.1501 12C21.1501 8.55959 19.2513 5.56266 16.4445 4"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pipowerdefaultduostroke;
