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
 * Pioperabrowsercontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pioperabrowsercontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "opera browser icon",
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
    <path d="M15.614 17a8.02 8.02 0 0 0 0-10m1.07 12.862A9.15 9.15 0 0 0 21.15 12c0-3.35-1.8-6.279-4.485-7.873m.02 15.735a9.15 9.15 0 1 1-.02-15.735m.02 15.735-.061.012A7.936 7.936 0 0 1 7.182 12 8.02 8.02 0 0 1 15.2 3.982q.725.002 1.439.133l.026.012" />
    <path
      fill={color}
      d="M2.85 12a9.15 9.15 0 0 0 13.834 7.862l-.06.012A7.936 7.936 0 0 1 7.182 12 8.02 8.02 0 0 1 15.2 3.982q.725.002 1.439.133l.026.012A9.15 9.15 0 0 0 2.85 12"
      opacity={0.28}
    />
  </Svg>
);

export default Pioperabrowsercontrast;
