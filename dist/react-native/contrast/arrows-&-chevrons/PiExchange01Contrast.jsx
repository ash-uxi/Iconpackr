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
 * Piexchange01contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piexchange01contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "exchange01 icon",
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
    <g fill={color} opacity={0.28}>
      <path d="M18.574 19.799A14.7 14.7 0 0 0 21 17.352l-.626.062a24 24 0 0 1-4.748 0L15 17.352c.706.905 1.52 1.726 2.426 2.447a.92.92 0 0 0 1.148 0M5.426 4.201A14.7 14.7 0 0 0 3 6.648l.626-.062a24 24 0 0 1 4.748 0L9 6.648a14.7 14.7 0 0 0-2.426-2.447.92.92 0 0 0-1.148 0" />
    </g>
    <path d="M18 17.532V7a3 3 0 1 0-6 0v10a3 3 0 1 1-6 0V6.468m12 11.064q1.19 0 2.374-.118l.626-.062a14.7 14.7 0 0 1-2.426 2.447.92.92 0 0 1-1.148 0A14.7 14.7 0 0 1 15 17.352l.626.062q1.185.117 2.374.118M6 6.468a24 24 0 0 0-2.374.118L3 6.648a14.7 14.7 0 0 1 2.426-2.447.92.92 0 0 1 1.148 0C7.48 4.922 8.294 5.743 9 6.648l-.626-.062A24 24 0 0 0 6 6.468" />
  </Svg>
);

export default Piexchange01contrast;
