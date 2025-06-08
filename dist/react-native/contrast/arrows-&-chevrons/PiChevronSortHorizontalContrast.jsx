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
 * Pichevronsorthorizontalcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pichevronsorthorizontalcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "chevron sort horizontal icon",
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
      <path d="M18.894 12.298A20.4 20.4 0 0 1 15 16c.2-2.663.2-5.337 0-8a20.4 20.4 0 0 1 3.894 3.702.47.47 0 0 1 0 .596M5.106 11.702A20.4 20.4 0 0 1 9 8c-.2 2.663-.2 5.337 0 8a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596" />
    </g>
    <path d="M18.894 12.298A20.4 20.4 0 0 1 15 16c.2-2.663.2-5.337 0-8a20.4 20.4 0 0 1 3.894 3.702.47.47 0 0 1 0 .596M5.106 11.702A20.4 20.4 0 0 1 9 8c-.2 2.663-.2 5.337 0 8a20.4 20.4 0 0 1-3.894-3.702.47.47 0 0 1 0-.596" />
  </Svg>
);

export default Pichevronsorthorizontalcontrast;
