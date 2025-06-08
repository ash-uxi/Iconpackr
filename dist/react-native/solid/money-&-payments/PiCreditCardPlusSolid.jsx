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
 * Picreditcardplussolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picreditcardplussolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "credit card plus icon",
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
      d="M20 16C20 15.4477 19.5523 15 19 15C18.4477 15 18 15.4477 18 16V18H16C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20H18V22C18 22.5523 18.4477 23 19 23C19.5523 23 20 22.5523 20 22V20H22C22.5523 20 23 19.5523 23 19C23 18.4477 22.5523 18 22 18H20V16Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M22.9999 10H1.00008L1 13.6428C0.999991 14.7266 0.999984 15.6008 1.05782 16.3086C1.11737 17.0375 1.24318 17.6777 1.54497 18.27C2.02434 19.2108 2.78924 19.9757 3.73005 20.455C4.32234 20.7568 4.96253 20.8826 5.69138 20.9422C6.39923 21 7.27344 21 8.35717 21H13.7639C13.2889 20.4692 13 19.7684 13 19C13 17.3431 14.3431 16 16 16C16 14.3431 17.3431 13 19 13C20.6569 13 22 14.3431 22 16C22.3334 16 22.6541 16.0544 22.9537 16.1548C23 15.4751 23 14.6493 23 13.6428L22.9999 10ZM4.85 13C4.85 12.4477 5.29772 12 5.85 12H9.15C9.70228 12 10.15 12.4477 10.15 13C10.15 13.5523 9.70228 14 9.15 14H5.85C5.29772 14 4.85 13.5523 4.85 13Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
    <path
      d="M8.35719 3H15.6428C16.7266 2.99999 17.6008 2.99998 18.3086 3.05782C19.0375 3.11737 19.6777 3.24318 20.27 3.54497C21.2108 4.02434 21.9757 4.78924 22.455 5.73005C22.7568 6.32234 22.8826 6.96253 22.9422 7.69138C22.9503 7.79092 22.9573 7.89376 22.9633 8H1.03669C1.0427 7.89376 1.04969 7.79092 1.05782 7.69138C1.11737 6.96253 1.24318 6.32234 1.54497 5.73005C2.02434 4.78924 2.78924 4.02434 3.73005 3.54497C4.32234 3.24318 4.96253 3.11737 5.69138 3.05782C6.39925 2.99998 7.27342 2.99999 8.35719 3Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Picreditcardplussolid;
