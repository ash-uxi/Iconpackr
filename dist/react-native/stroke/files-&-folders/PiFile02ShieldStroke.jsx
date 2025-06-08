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
 * Pifile02shieldstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pifile02shieldstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "file02 shield icon",
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
      d="M20 11C20 9.34315 18.6569 8 17 8L16.4 8C16.0284 8 15.8426 8 15.6871 7.97538C14.8313 7.83983 14.1602 7.16865 14.0246 6.31287C14 6.1574 14 5.9716 14 5.6V5C14 3.34315 12.6569 2 11 2M20 10V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V6C4 3.79086 5.79086 2 8 2H12C16.4183 2 20 5.58172 20 10ZM11.6114 11.0621L9.73596 11.7393C9.33594 11.8838 9.06348 12.2564 9.04714 12.6814L9.00284 13.8331C8.94795 15.2602 9.69182 16.5992 10.9325 17.3066L11.4618 17.6084C11.7754 17.7872 12.159 17.7914 12.4764 17.6194L12.9946 17.3387C14.3234 16.619 15.1046 15.185 14.9887 13.6782L14.9097 12.6512C14.8782 12.2416 14.6095 11.8886 14.2231 11.7491L12.3207 11.0621C12.0915 10.9793 11.8406 10.9793 11.6114 11.0621Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pifile02shieldstroke;
