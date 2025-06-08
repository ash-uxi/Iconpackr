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
 * Pimergecontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimergecontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "merge icon",
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
    <path d="M12 7.782V13l-6 7m6-12.218q.99 0 1.979.082L16 8.03a20.6 20.6 0 0 0-3.604-3.886.62.62 0 0 0-.792 0A20.6 20.6 0 0 0 8 8.03l2.021-.167A24 24 0 0 1 12 7.782M18 20l-3.429-4" />
    <path
      fill={color}
      d="M12.396 4.145A20.6 20.6 0 0 1 16 8.03l-2.021-.167a24 24 0 0 0-3.958 0L8 8.03a20.6 20.6 0 0 1 3.604-3.886.62.62 0 0 1 .792 0"
      opacity={0.28}
    />
  </Svg>
);

export default Pimergecontrast;
