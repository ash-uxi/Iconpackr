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
 * Pilightningthunderelectriconcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilightningthunderelectriconcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "lightning thunder electric on icon",
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
      d="m6.054 8.38 5.756-4.513c1.638-1.284 2.457-1.926 3.018-1.863.485.055.912.366 1.136.828.26.533-.003 1.58-.53 3.673l-.44 1.753c-.211.838-.316 1.257-.244 1.62.064.32.221.611.45.83.259.249.652.361 1.438.585l.51.146c1.512.432 2.268.648 2.57 1.087.264.382.348.872.23 1.328-.137.526-.772 1.014-2.041 1.99l-5.652 4.342c-1.628 1.25-2.442 1.876-3 1.81a1.46 1.46 0 0 1-1.129-.831c-.257-.532.003-1.565.522-3.63l.394-1.568c.211-.838.316-1.257.244-1.621a1.58 1.58 0 0 0-.45-.83c-.259-.248-.652-.36-1.438-.585l-.568-.162c-1.496-.427-2.244-.64-2.546-1.077a1.63 1.63 0 0 1-.234-1.322c.132-.524.756-1.013 2.004-1.99"
      opacity={0.28}
    />
    <path d="m6.054 8.38 5.756-4.513c1.638-1.284 2.457-1.926 3.018-1.863.485.055.912.366 1.136.828.26.533-.003 1.58-.53 3.673l-.44 1.753c-.211.838-.316 1.257-.244 1.62.064.32.221.611.45.83.259.249.652.361 1.438.585l.51.146c1.512.432 2.268.648 2.57 1.087.264.382.348.872.23 1.328-.137.526-.772 1.014-2.041 1.99l-5.652 4.342c-1.628 1.25-2.442 1.876-3 1.81a1.46 1.46 0 0 1-1.129-.831c-.257-.532.003-1.565.522-3.63l.394-1.568c.211-.838.316-1.257.244-1.621a1.58 1.58 0 0 0-.45-.83c-.259-.248-.652-.36-1.438-.585l-.568-.162c-1.496-.427-2.244-.64-2.546-1.077a1.63 1.63 0 0 1-.234-1.322c.132-.524.756-1.013 2.004-1.99" />
  </Svg>
);

export default Pilightningthunderelectriconcontrast;
