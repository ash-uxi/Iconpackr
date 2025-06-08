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
 * Pitickettokenonecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitickettokenonecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "ticket token one icon",
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
    <path d="M12 15V9.378c-.676.165-1.193.63-1.5 1.244M12 15h-2m2 0h2M2.6 9a.6.6 0 0 1-.6-.6V8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v.4a.6.6 0 0 1-.6.6 2.4 2.4 0 0 0-2.4 2.4v1.2a2.4 2.4 0 0 0 2.4 2.4.6.6 0 0 1 .6.6v.4a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4v-.4a.6.6 0 0 1 .6-.6A2.4 2.4 0 0 0 5 12.6v-1.2A2.4 2.4 0 0 0 2.6 9" />
    <path
      fill={color}
      d="M18 4H6a4 4 0 0 0-4 4v.4a.6.6 0 0 0 .6.6A2.4 2.4 0 0 1 5 11.4v1.2A2.4 2.4 0 0 1 2.6 15a.6.6 0 0 0-.6.6v.4a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-.4a.6.6 0 0 0-.6-.6 2.4 2.4 0 0 1-2.4-2.4v-1.2A2.4 2.4 0 0 1 21.4 9a.6.6 0 0 0 .6-.6V8a4 4 0 0 0-4-4"
      opacity={0.28}
    />
  </Svg>
);

export default Pitickettokenonecontrast;
