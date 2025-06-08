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
 * Piexternallinkcirclecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piexternallinkcirclecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "external link circle icon",
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
      d="M19.902 4.543c.168 1.628.12 3.28-.142 4.913L18.614 8.11a24 24 0 0 0-2.722-2.722l-1.347-1.146A18.8 18.8 0 0 1 19.46 4.1a.496.496 0 0 1 .443.443"
      opacity={0.28}
    />
    <path d="M19.974 13.5A7.11 7.11 0 0 1 12.89 20H12a8 8 0 0 1-8-8v-.889a7.11 7.11 0 0 1 6.5-7.085m6.808 2.668L10 14.002m7.308-7.308q.681.681 1.306 1.416l1.146 1.346c.262-1.633.31-3.285.142-4.913a.495.495 0 0 0-.443-.443 18.8 18.8 0 0 0-4.913.142l1.346 1.146q.735.625 1.416 1.306" />
  </Svg>
);

export default Piexternallinkcirclecontrast;
