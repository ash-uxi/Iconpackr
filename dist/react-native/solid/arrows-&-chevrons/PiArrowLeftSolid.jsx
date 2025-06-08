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
 * Piarrowleftsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowleftsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow left icon",
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
      d="M10.8291 6.05001L10.5813 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L10.5813 13L10.8291 17.95C10.8485 18.3361 10.6435 18.6988 10.3028 18.8814C9.96208 19.064 9.54661 19.0339 9.23579 18.804C7.06319 17.1973 5.11149 15.32 3.42903 13.2195C3.1443 12.864 3 12.4325 3 12C3 11.5675 3.1443 11.136 3.42903 10.7805C5.11149 8.68002 7.06319 6.80273 9.23579 5.19599C9.54661 4.96612 9.96208 4.936 10.3028 5.11862C10.6435 5.30125 10.8485 5.66391 10.8291 6.05001Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piarrowleftsolid;
