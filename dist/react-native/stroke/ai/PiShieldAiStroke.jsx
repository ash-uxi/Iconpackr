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
 * Pishieldaistroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pishieldaistroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "shield ai icon",
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
      d="M8.5 15H8.501M10.8837 2.36804L5.4961 4.31356C4.34691 4.72854 3.56421 5.799 3.51725 7.01992L3.39 10.3285C3.23232 14.4282 5.36929 18.2749 8.93337 20.3071L10.454 21.1741C11.3549 21.6878 12.4571 21.6998 13.3689 21.2059L14.8575 20.3995C18.6748 18.3318 20.9189 14.2123 20.586 9.88366L20.359 6.93316C20.2685 5.7566 19.4967 4.74238 18.3868 4.34159L12.9216 2.36804C12.2631 2.13025 11.5422 2.13025 10.8837 2.36804ZM12.5 8C11.8625 9.61646 11.1609 10.345 9.5 11C11.1609 11.655 11.8625 12.3835 12.5 14C13.1375 12.3835 13.8391 11.655 15.5 11C13.8391 10.345 13.1375 9.61646 12.5 8Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pishieldaistroke;
