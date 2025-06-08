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
 * Pivolumezerosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivolumezerosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "volume zero icon",
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
      d="M18 5.10702C18 2.58272 15.1467 1.11438 13.0926 2.5816L10.2797 4.59085C9.82732 4.91396 9.31155 5.13741 8.76644 5.24643C5.99496 5.80073 4 8.23418 4 11.0606V12.9785C4 15.8049 5.99496 18.2383 8.76644 18.7926C9.31155 18.9016 9.82732 19.1251 10.2797 19.4482L13.0926 21.4574C15.1467 22.9247 18 21.4563 18 18.932V5.10702Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pivolumezerosolid;
