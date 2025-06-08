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
 * Piuploadbarupsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piuploadbarupsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "upload bar up icon",
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
      d="M13 10.4289C14.6252 10.4669 16.2489 10.5976 17.8629 10.821C18.2616 10.8761 18.6544 10.687 18.8599 10.3409C19.0653 9.99485 19.0433 9.55936 18.804 9.23579C17.1973 7.06319 15.32 5.11149 13.2195 3.42903C12.864 3.1443 12.4325 3 12 3C11.5675 3 11.136 3.1443 10.7805 3.42903C8.68001 5.11149 6.80273 7.06319 5.19599 9.23579C4.95669 9.55936 4.93468 9.99485 5.14013 10.3409C5.34558 10.687 5.73845 10.8761 6.1371 10.821C7.75114 10.5976 9.37475 10.4669 11 10.4289V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V10.4289Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M5 19C4.44772 19 4 19.4477 4 20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20C20 19.4477 19.5523 19 19 19H5Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piuploadbarupsolid;
