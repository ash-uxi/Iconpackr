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
 * Pilayerstosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilayerstosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "layers to icon",
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
      d="M15.2319 2.33696C14.4075 1.14401 12.9377 0.451384 11.3786 0.760515L4.13656 2.19616C2.34997 2.55058 1.07431 4.12897 1.06242 5.9506L1.01179 13.4512C1.00092 15.2232 2.16865 16.6988 3.73234 17.1714C3.29789 16.5428 3.04257 15.7754 3.04768 14.9424L3.09831 7.44181C3.11019 5.62018 4.38586 4.0418 6.17245 3.68738L13.4144 2.25173C14.0474 2.12623 14.6656 2.16583 15.2319 2.33696Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M18.7655 5.32488C17.9407 4.13395 16.4722 3.44288 14.9144 3.75173L7.67245 5.18738C5.88586 5.5418 4.61019 7.12018 4.59831 8.94181L4.54768 16.4424C4.53677 18.2198 5.71163 19.6989 7.28246 20.1669C6.84663 19.5377 6.59041 18.769 6.59553 17.9346L6.64616 10.434C6.65805 8.61237 7.93372 7.03398 9.7203 6.67956L16.9623 5.24391C17.5899 5.11947 18.2031 5.15736 18.7655 5.32488Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M22.9998 10.5502C23.0158 8.1358 20.8432 6.27185 18.4623 6.74391L11.2203 8.17956C9.43371 8.53398 8.15805 10.1124 8.14616 11.934L8.09553 19.4346C8.08072 21.8484 10.2529 23.7121 12.6337 23.2401L19.8756 21.8045C21.6628 21.4506 22.938 19.8712 22.9498 18.05L22.9998 10.5502Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pilayerstosolid;
