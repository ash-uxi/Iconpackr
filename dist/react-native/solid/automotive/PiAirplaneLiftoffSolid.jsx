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
 * Piairplaneliftoffsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piairplaneliftoffsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "airplane liftoff icon",
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
      d="M20.9998 19C21.5521 19 21.9998 19.4478 21.9998 20C21.9998 20.5523 21.5521 21 20.9998 21H2.99978C2.4475 21 1.99978 20.5523 1.99978 20C1.99978 19.4478 2.4475 19.0001 2.99978 19H20.9998ZM4.87869 2.78325C5.93062 2.56141 7.03118 2.77249 7.92947 3.37407L15.2537 8.27935L17.7136 7.62017L17.9138 7.57231C19.9829 7.12889 22.0582 8.38221 22.6121 10.4493L22.6551 10.6495C22.8062 11.5833 22.2776 12.5 21.3933 12.836L21.198 12.8985L7.83181 16.4795C6.27252 16.8974 4.62654 16.3361 3.64529 15.0801L3.45877 14.8204L1.16482 11.3467C0.987924 11.0786 0.951309 10.7418 1.06521 10.4415C1.17926 10.1409 1.43051 9.91333 1.74099 9.83013L2.41482 9.64946L2.55837 9.61626C2.89611 9.55203 3.24578 9.57589 3.57302 9.68657L6.41482 10.6475L7.62576 10.3233L3.49685 4.54595C3.30633 4.27917 3.25829 3.93561 3.36892 3.627C3.47963 3.31846 3.73492 3.08398 4.05154 2.99907L4.66873 2.83403L4.87869 2.78325Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piairplaneliftoffsolid;
