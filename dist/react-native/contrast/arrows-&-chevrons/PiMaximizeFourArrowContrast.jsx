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
 * Pimaximizefourarrowcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimaximizefourarrowcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "maximize four arrow icon",
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
      <path d="M4.58 4.077a18.5 18.5 0 0 1 4.753.18l-1.229 1.04a24 24 0 0 0-2.807 2.807l-1.04 1.23a18.5 18.5 0 0 1-.18-4.754.555.555 0 0 1 .503-.503M14.67 4.257a18.5 18.5 0 0 1 4.753-.18.555.555 0 0 1 .503.503 18.5 18.5 0 0 1-.18 4.753l-1.04-1.229a24 24 0 0 0-2.807-2.807zM14.667 19.744c1.58.264 3.178.324 4.753.179a.555.555 0 0 0 .502-.503 18.5 18.5 0 0 0-.179-4.753l-1.04 1.229a24 24 0 0 1-2.807 2.807zM9.33 19.744c-1.581.264-3.179.324-4.753.179a.555.555 0 0 1-.503-.503 18.5 18.5 0 0 1 .18-4.753l1.04 1.229A24 24 0 0 0 8.1 18.703z" />
    </g>
    <path d="M19.42 19.923a18.5 18.5 0 0 1-4.753-.18l1.229-1.04a24 24 0 0 0 2.807-2.807l1.04-1.23c.265 1.582.325 3.18.18 4.754a.555.555 0 0 1-.503.503M19.423 4.077a18.5 18.5 0 0 0-4.753.18l1.23 1.04a24 24 0 0 1 2.806 2.807l1.04 1.23c.266-1.582.326-3.18.18-4.754a.555.555 0 0 0-.503-.503M4.577 19.923c1.575.145 3.172.085 4.753-.18l-1.229-1.04a24 24 0 0 1-2.807-2.807l-1.04-1.23a18.5 18.5 0 0 0-.18 4.754.555.555 0 0 0 .503.503M4.58 4.077a18.5 18.5 0 0 1 4.753.18l-1.229 1.04a24 24 0 0 0-2.807 2.807l-1.04 1.23a18.5 18.5 0 0 1-.18-4.754.555.555 0 0 1 .503-.503" />
  </Svg>
);

export default Pimaximizefourarrowcontrast;
