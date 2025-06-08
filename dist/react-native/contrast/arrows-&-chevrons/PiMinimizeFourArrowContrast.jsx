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
 * Piminimizefourarrowcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piminimizefourarrowcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "minimize four arrow icon",
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
      <path d="M8.753 9.256A18.5 18.5 0 0 1 4 9.076l1.23-1.04a24 24 0 0 0 2.806-2.807L9.076 4c.266 1.58.326 3.179.18 4.753a.555.555 0 0 1-.503.503M20.003 9.077a18.5 18.5 0 0 1-4.753.179.555.555 0 0 1-.503-.503A18.5 18.5 0 0 1 14.927 4l1.04 1.23a24 24 0 0 0 2.807 2.806zM8.756 14.744a18.5 18.5 0 0 0-4.753.179l1.23 1.04a24 24 0 0 1 2.806 2.808L9.08 20c.265-1.581.325-3.179.18-4.753a.555.555 0 0 0-.504-.503M15.247 14.744a18.5 18.5 0 0 1 4.753.179l-1.23 1.04a24 24 0 0 0-2.806 2.808L14.924 20a18.5 18.5 0 0 1-.18-4.753.555.555 0 0 1 .503-.503" />
    </g>
    <path d="M15.247 14.744a18.5 18.5 0 0 1 4.753.179l-1.23 1.04a24 24 0 0 0-2.806 2.808L14.924 20a18.5 18.5 0 0 1-.18-4.753.555.555 0 0 1 .503-.503M15.25 9.256c1.575.146 3.172.086 4.753-.18l-1.229-1.04a24 24 0 0 1-2.807-2.807L14.927 4a18.5 18.5 0 0 0-.18 4.753.555.555 0 0 0 .503.503M8.753 9.256A18.5 18.5 0 0 1 4 9.076l1.23-1.04a24 24 0 0 0 2.806-2.807L9.076 4c.266 1.58.326 3.179.18 4.753a.555.555 0 0 1-.503.503M8.756 14.744a18.5 18.5 0 0 0-4.753.179l1.23 1.04a24 24 0 0 1 2.806 2.808L9.08 20c.265-1.581.325-3.179.18-4.753a.555.555 0 0 0-.504-.503" />
  </Svg>
);

export default Piminimizefourarrowcontrast;
