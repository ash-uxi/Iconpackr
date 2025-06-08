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
 * Piannotationexclamationcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piannotationexclamationcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "annotation exclamation icon",
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
    <path d="M12 11.5v-4m-.008 7.5h.01M8.58 3h6.84c2.127 0 3.191 0 4.004.414a3.8 3.8 0 0 1 1.66 1.66c.416.813.416 1.877.416 4.006v4.56c0 .705 0 1.058-.047 1.353a3.8 3.8 0 0 1-3.16 3.16c-.57.09-1.148 0-1.72.054a1.9 1.9 0 0 0-1.232.616c-.333.37-.61.802-.91 1.2-.823 1.1-1.236 1.651-1.742 1.848a1.9 1.9 0 0 1-1.377 0c-.506-.197-.92-.747-1.745-1.848-.298-.398-.575-.83-.91-1.2a1.9 1.9 0 0 0-1.23-.616c-.572-.053-1.15.035-1.72-.055a3.8 3.8 0 0 1-3.16-3.159c-.047-.295-.047-.648-.047-1.354V9.08c0-2.128 0-3.192.414-4.004a3.8 3.8 0 0 1 1.661-1.66C5.388 3 6.452 3 8.58 3" />
    <path
      fill={color}
      d="M2.508 9.08c0-2.129 0-3.193.414-4.005a3.8 3.8 0 0 1 1.661-1.66C5.396 3 6.46 3 8.588 3h6.84c2.127 0 3.191 0 4.004.414a3.8 3.8 0 0 1 1.66 1.66c.415.813.415 1.877.415 4.006v4.56c0 .705 0 1.058-.047 1.353a3.8 3.8 0 0 1-3.159 3.16c-.57.09-1.148 0-1.72.054a1.9 1.9 0 0 0-1.232.616c-.334.37-.61.802-.91 1.2-.824 1.1-1.237 1.651-1.743 1.848a1.9 1.9 0 0 1-1.377 0c-.506-.197-.919-.747-1.744-1.848-.298-.398-.575-.83-.91-1.2a1.9 1.9 0 0 0-1.231-.616c-.571-.053-1.15.035-1.72-.055a3.8 3.8 0 0 1-3.159-3.159c-.047-.295-.047-.648-.047-1.354z"
      opacity={0.28}
    />
  </Svg>
);

export default Piannotationexclamationcontrast;
