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
 * Pialignverticalcentercontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialignverticalcentercontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "align vertical center icon",
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
      <path d="M11.703 9.88c-1.017-.925-1.925-2-2.703-3.196 1.995.197 4.005.197 6 0a16.4 16.4 0 0 1-2.703 3.197A.44.44 0 0 1 12 10a.44.44 0 0 1-.297-.12M12.297 14.12c1.017.925 1.925 2 2.703 3.196a30.6 30.6 0 0 0-6 0 16.4 16.4 0 0 1 2.703-3.197A.44.44 0 0 1 12 14c.105 0 .21.04.297.12" />
    </g>
    <path d="M12 6.832V3m0 3.832q-1.502 0-3-.148a16.4 16.4 0 0 0 2.703 3.197A.44.44 0 0 0 12 10a.44.44 0 0 0 .297-.12c1.017-.925 1.925-2 2.703-3.196q-1.498.147-3 .148m0 10.336V21m0-3.832q1.502 0 3 .148a16.4 16.4 0 0 0-2.703-3.197A.44.44 0 0 0 12 14a.44.44 0 0 0-.297.12A16.4 16.4 0 0 0 9 17.315a31 31 0 0 1 3-.148M5 12h14" />
  </Svg>
);

export default Pialignverticalcentercontrast;
