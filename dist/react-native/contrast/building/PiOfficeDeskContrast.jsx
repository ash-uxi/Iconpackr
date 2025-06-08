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
 * Piofficedeskcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piofficedeskcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "office desk icon",
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
    <path d="M16 13h2M16 9h2" />
    <path
      fill={color}
      d="M21 15.8V5h-8v10.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C14.52 19 15.08 19 16.2 19h1.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 17.48 21 16.92 21 15.8"
      opacity={0.28}
    />
    <path d="M21 5v10.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 19 18.92 19 17.8 19h-1.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C13 17.48 13 16.92 13 15.8V9m8-4h-8m8 0h1M3 5h10M3 5H2m1 0v4m10-4v4M3 19V9m0 0h10" />
  </Svg>
);

export default Piofficedeskcontrast;
