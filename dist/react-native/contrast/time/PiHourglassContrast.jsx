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
 * Pihourglasscontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pihourglasscontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "hourglass icon",
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
      d="M10.5 12c0-3.52-6.086-3.889-6.486-7.516a2.32 2.32 0 0 1 .683-1.927C5.282 2 6.624 2 9.309 2h5.382c2.685 0 4.027 0 4.612.557.507.483.762 1.203.683 1.927C19.586 8.111 13.5 8.481 13.5 12s6.086 3.889 6.486 7.516a2.32 2.32 0 0 1-.683 1.927c-.585.557-1.927.557-4.612.557H9.31c-2.685 0-4.027 0-4.612-.557a2.32 2.32 0 0 1-.683-1.927c.4-3.627 6.486-3.997 6.486-7.516"
      opacity={0.28}
    />
    <path d="M10.5 12c0-3.52-6.086-3.889-6.486-7.516a2.32 2.32 0 0 1 .683-1.927C5.282 2 6.624 2 9.309 2h5.382c2.685 0 4.027 0 4.612.557.507.483.762 1.203.683 1.927C19.586 8.111 13.5 8.481 13.5 12s6.086 3.889 6.486 7.516a2.32 2.32 0 0 1-.683 1.927c-.585.557-1.927.557-4.612.557H9.31c-2.685 0-4.027 0-4.612-.557a2.32 2.32 0 0 1-.683-1.927c.4-3.627 6.486-3.997 6.486-7.516" />
  </Svg>
);

export default Pihourglasscontrast;
