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
 * Piswipelefthandcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piswipelefthandcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "swipe left hand icon",
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
    <path d="M16.325 2c-.79.37-1.527.84-2.193 1.396a.32.32 0 0 0-.107.18l-.001.004m1.51 2.341a10 10 0 0 1-1.48-2.136.32.32 0 0 1-.03-.205m0 0L14 3.577m.024.003c2.94.45 5.599 1.752 7.716 3.647M8.763 20.205l-5.788-5.207a.79.79 0 0 1 .004-1.18 3.16 3.16 0 0 1 3.884-.243l1.767 1.21-2.588-9.66A2 2 0 1 1 9.905 4.09l1.553 5.796 4.852-.47c3.558-.346 4.734 3.472 4.452 6.37-.496 5.103-8.24 7.801-12 4.419" />
    <path
      fill={color}
      d="m8.763 20.205-5.788-5.207a.79.79 0 0 1 .004-1.18 3.16 3.16 0 0 1 3.884-.243l1.767 1.21-2.588-9.66A2 2 0 1 1 9.905 4.09l1.553 5.796 4.852-.47c3.558-.345 4.734 3.472 4.452 6.37-.496 5.103-8.24 7.801-12 4.419"
      opacity={0.28}
    />
  </Svg>
);

export default Piswipelefthandcontrast;
