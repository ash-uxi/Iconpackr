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
 * Piusercancelcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piusercancelcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user cancel icon",
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
      <path d="M11 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M2 19a5 5 0 0 1 5-5h5.435v.004q.047-.003.095-.004a1 1 0 0 1 .864.496h.005q.194.337.48.625l.378.379-.378.379a3 3 0 0 0 .123 4.36 1 1 0 0 1-.743 1.757V22H5a3 3 0 0 1-3-3" />
    </g>
    <path d="M12.53 15H7a4 4 0 0 0-4 4 2 2 0 0 0 2 2h8.354M21 13l-2.5 2.5m0 0L16 18m2.5-2.5L21 18m-2.5-2.5L16 13m-1-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0" />
  </Svg>
);

export default Piusercancelcontrast;
