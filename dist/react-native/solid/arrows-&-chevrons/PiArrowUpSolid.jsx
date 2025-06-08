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
 * Piarrowupsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowupsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow up icon",
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
      d="M17.95 10.8291L13 10.5813L13 20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20L11 10.5813L6.05001 10.8291C5.66391 10.8485 5.30125 10.6435 5.11862 10.3028C4.936 9.96208 4.96612 9.54661 5.19599 9.23579C6.80273 7.06319 8.68001 5.11149 10.7805 3.42903C11.136 3.1443 11.5675 3 12 3C12.4325 3 12.864 3.1443 13.2195 3.42903C15.32 5.11149 17.1973 7.06319 18.804 9.23579C19.0339 9.54661 19.064 9.96208 18.8814 10.3028C18.6988 10.6435 18.3361 10.8485 17.95 10.8291Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piarrowupsolid;
