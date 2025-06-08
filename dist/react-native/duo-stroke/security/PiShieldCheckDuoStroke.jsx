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
 * Pishieldcheckduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pishieldcheckduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "shield check icon",
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
      d="M5.4961 4.31356L10.8837 2.36804C11.5422 2.13025 12.2631 2.13025 12.9216 2.36804L18.3868 4.34159C19.4967 4.74238 20.2685 5.7566 20.359 6.93316L20.586 9.88366C20.9189 14.2123 18.6748 18.3318 14.8575 20.3995L13.3689 21.2059C12.4571 21.6998 11.3549 21.6878 10.454 21.1741L8.93337 20.3071C5.36929 18.2749 3.23232 14.4282 3.39 10.3285L3.51725 7.01992C3.56421 5.799 4.34691 4.72854 5.4961 4.31356Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
    <path
      d="M9.13281 12.0192L11.1395 14.0238C12.1236 12.303 13.4984 10.8499 15.1328 9.73389"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pishieldcheckduostroke;
