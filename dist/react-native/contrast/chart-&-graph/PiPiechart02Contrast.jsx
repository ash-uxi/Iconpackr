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
 * Pipiechart02contrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipiechart02contrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "piechart02 icon",
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
    <path d="m10.286 4.503 2.282 6.428a1.5 1.5 0 0 0 .742.84l6.101 3.05M10.286 4.504a7.424 7.424 0 0 1 9.125 10.32m-9.125-10.32-.193-.544c-.277-.781-1.142-1.2-1.87-.802a9.5 9.5 0 1 0 12.27 13.878c.484-.674.175-1.585-.567-1.956l-.515-.257" />
    <path
      fill={color}
      d="M20.194 11.501a7.424 7.424 0 0 0-9.908-6.998l-.193-.544c-.277-.781-1.142-1.2-1.87-.802a9.5 9.5 0 1 0 12.27 13.878c.484-.674.175-1.585-.567-1.956l-.515-.257c.5-1 .783-2.127.783-3.321"
      opacity={0.28}
    />
  </Svg>
);

export default Pipiechart02contrast;
