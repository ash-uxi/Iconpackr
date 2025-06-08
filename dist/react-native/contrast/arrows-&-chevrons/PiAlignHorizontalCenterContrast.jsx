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
 * Pialignhorizontalcentercontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignhorizontalcentercontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align horizontal center icon",
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
      <path d="M14.12 11.703c.925-1.017 2-1.925 3.196-2.703a30.6 30.6 0 0 0 0 6 16.4 16.4 0 0 1-3.197-2.703A.44.44 0 0 1 14 12c0-.105.04-.21.12-.297M9.88 12.297c-.925 1.017-2 1.925-3.196 2.703a30.6 30.6 0 0 0 0-6 16.4 16.4 0 0 1 3.197 2.703A.44.44 0 0 1 10 12a.44.44 0 0 1-.12.297" />
    </g>
    <path d="M17.168 12H21m-3.832 0q0-1.502.148-3a16.4 16.4 0 0 0-3.197 2.703A.44.44 0 0 0 14 12c0 .105.04.21.12.297.925 1.017 2 1.925 3.196 2.703a31 31 0 0 1-.148-3M6.832 12H3m3.832 0q0 1.502-.148 3a16.4 16.4 0 0 0 3.197-2.703A.44.44 0 0 0 10 12a.44.44 0 0 0-.12-.297c-.925-1.017-2-1.925-3.196-2.703q.147 1.498.148 3M12 5v14" />
  </Svg>
);

export default Pialignhorizontalcentercontrast;
