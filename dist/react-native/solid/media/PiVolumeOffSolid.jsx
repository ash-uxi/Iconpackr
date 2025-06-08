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
 * Pivolumeoffsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pivolumeoffsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "volume off icon",
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
      d="M17.9999 12.648C17.9999 12.2436 17.7563 11.8789 17.3826 11.7242C17.0089 11.5694 16.5788 11.6549 16.2928 11.9409L10.2426 17.9912C10.0347 18.199 9.92884 18.4878 9.95308 18.7808C9.97733 19.0737 10.1292 19.3412 10.3684 19.512L13.0925 21.4578C15.1466 22.925 17.9999 21.4567 17.9999 18.9324V12.648Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M22.707 2.7071C23.0975 2.31657 23.0975 1.6834 22.707 1.29288C22.3165 0.902365 21.6833 0.902373 21.2928 1.2929L17.9637 4.62208C17.6269 2.40211 15.0111 1.21155 13.0925 2.58196L10.2796 4.59121C9.82724 4.91433 9.31146 5.13778 8.76635 5.2468C5.99487 5.80109 3.99991 8.23455 3.99991 11.0609V12.9789C3.99991 14.5187 4.59221 15.9416 5.57856 17.0073L1.2929 21.2929C0.90237 21.6834 0.902368 22.3166 1.29289 22.7071C1.68341 23.0976 2.31658 23.0976 2.7071 22.7071L22.707 2.7071Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pivolumeoffsolid;
