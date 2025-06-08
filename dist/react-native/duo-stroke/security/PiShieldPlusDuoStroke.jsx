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
 * Pishieldplusduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pishieldplusduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "shield plus icon",
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
      d="M12.1328 15V12M12.1328 12V9M12.1328 12L9.13281 12M12.1328 12H15.1328"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M5.49513 4.31356L10.8827 2.36804C11.5412 2.13025 12.2621 2.13025 12.9206 2.36804L18.3858 4.34159C19.4957 4.74238 20.2675 5.7566 20.358 6.93316L20.585 9.88366C20.918 14.2123 18.6739 18.3318 14.8565 20.3995L13.3679 21.2059C12.4561 21.6998 11.3539 21.6878 10.4531 21.1741L8.93239 20.3071C5.36831 18.2749 3.23134 14.4282 3.38902 10.3285L3.51627 7.01992C3.56323 5.799 4.34594 4.72854 5.49513 4.31356Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pishieldplusduostroke;
