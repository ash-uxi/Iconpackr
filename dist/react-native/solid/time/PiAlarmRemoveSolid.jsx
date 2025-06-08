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
 * Pialarmremovesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pialarmremovesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "alarm remove icon",
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
      d="M18.2929 2.29289C18.6834 1.90237 19.3166 1.90237 19.7071 2.29289L22.7071 5.29289C23.0976 5.68342 23.0976 6.31658 22.7071 6.70711C22.3166 7.09763 21.6834 7.09763 21.2929 6.70711L18.2929 3.70711C17.9024 3.31658 17.9024 2.68342 18.2929 2.29289Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13ZM8.8999 12C8.34762 12 7.8999 12.4477 7.8999 13C7.8999 13.5523 8.34762 14 8.8999 14H15.0999C15.6522 14 16.0999 13.5523 16.0999 13C16.0999 12.4477 15.6522 12 15.0999 12H8.8999Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
    <path
      d="M5.70711 2.29289C6.09763 2.68342 6.09763 3.31658 5.70711 3.70711L2.70711 6.70711C2.31658 7.09763 1.68342 7.09763 1.29289 6.70711C0.902369 6.31658 0.902369 5.68342 1.29289 5.29289L4.29289 2.29289C4.68342 1.90237 5.31658 1.90237 5.70711 2.29289Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pialarmremovesolid;
