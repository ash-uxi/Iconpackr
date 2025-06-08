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
 * Pidangerskullcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidangerskullcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "danger skull icon",
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
    <path d="M10.3 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15.7 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <path
      fill={color}
      d="M19 14.419V10a7 7 0 1 0-14 0v4.419c0 .944.604 1.782 1.5 2.081A2.19 2.19 0 0 1 8 18.581v.094A2.325 2.325 0 0 0 10.325 21h3.35A2.325 2.325 0 0 0 16 18.675v-.094c0-.944.604-1.782 1.5-2.081a2.19 2.19 0 0 0 1.5-2.081"
      opacity={0.28}
    />
    <path d="M5 10a7 7 0 0 1 14 0v4.419c0 .944-.604 1.782-1.5 2.081a2.19 2.19 0 0 0-1.5 2.081v.094A2.325 2.325 0 0 1 13.675 21h-3.35A2.325 2.325 0 0 1 8 18.675v-.094c0-.944-.604-1.782-1.5-2.081A2.19 2.19 0 0 1 5 14.419z" />
  </Svg>
);

export default Pidangerskullcontrast;
