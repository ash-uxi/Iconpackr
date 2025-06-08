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
 * Pidoublechevronrightcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidoublechevronrightcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "double chevron right icon",
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
      <path d="M16.894 11.702A20.4 20.4 0 0 0 13 8l.165 2.205c.09 1.195.09 2.395 0 3.59L13 16a20.4 20.4 0 0 0 3.894-3.702.47.47 0 0 0 0-.596M10.894 11.702A20.4 20.4 0 0 0 7 8l.165 2.205c.09 1.195.09 2.395 0 3.59L7 16a20.4 20.4 0 0 0 3.894-3.702.47.47 0 0 0 0-.596" />
    </g>
    <path d="M10.894 11.702A20.4 20.4 0 0 0 7 8l.165 2.205c.09 1.195.09 2.395 0 3.59L7 16a20.4 20.4 0 0 0 3.894-3.702.47.47 0 0 0 0-.596M16.894 11.702A20.4 20.4 0 0 0 13 8l.165 2.205c.09 1.195.09 2.395 0 3.59L13 16a20.4 20.4 0 0 0 3.894-3.702.47.47 0 0 0 0-.596" />
  </Svg>
);

export default Pidoublechevronrightcontrast;
