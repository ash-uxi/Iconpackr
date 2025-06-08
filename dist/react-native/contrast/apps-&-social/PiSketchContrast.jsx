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
 * Pisketchcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisketchcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "sketch icon",
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
    <path d="m17.52 9.025-4.142 9.418L12 21m5.52-11.975H6.48m11.04 0h4.98m-4.98 0L12 3M6.48 9.025l4.142 9.418L12 21M6.48 9.025H1.5m4.98 0L12 3m10.5 6.025a2 2 0 0 0-.374-1.117L19.224 3.84A2 2 0 0 0 17.591 3H12m10.5 6.025c.011.483-.15.969-.483 1.357l-8.493 9.916c-.4.468-.962.702-1.524.702M1.5 9.025c-.011.483.15.969.483 1.357l8.493 9.916c.4.468.962.702 1.524.702M1.5 9.025c.01-.391.134-.781.374-1.117L4.776 3.84A2 2 0 0 1 6.409 3H12" />
    <path
      fill={color}
      d="M22.126 7.908 19.224 3.84A2 2 0 0 0 17.591 3H6.409c-.648 0-1.256.313-1.633.841L1.874 7.908a2.005 2.005 0 0 0 .109 2.474l8.493 9.916c.4.468.962.702 1.524.702s1.124-.234 1.524-.702l8.493-9.916a2.006 2.006 0 0 0 .11-2.474"
      opacity={0.28}
    />
  </Svg>
);

export default Pisketchcontrast;
