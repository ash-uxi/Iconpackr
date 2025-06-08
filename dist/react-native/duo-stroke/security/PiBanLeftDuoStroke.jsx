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
 * Pibanleftduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibanleftduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ban left icon",
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
      d="M18.4694 18.4701L5.5293 5.53003"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M2.85059 12.0001C2.85059 17.0535 6.94718 21.1501 12.0006 21.1501C17.054 21.1501 21.1506 17.0535 21.1506 12.0001C21.1506 6.94669 17.054 2.8501 12.0006 2.8501C6.94718 2.8501 2.85059 6.94669 2.85059 12.0001Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pibanleftduostroke;
