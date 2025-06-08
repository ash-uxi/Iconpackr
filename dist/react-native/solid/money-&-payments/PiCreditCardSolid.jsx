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
 * Picreditcardsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picreditcardsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "credit card icon",
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
      d="M15.6428 3C16.7266 2.99999 17.6007 2.99998 18.3086 3.05782C19.0375 3.11737 19.6777 3.24318 20.27 3.54497C21.2108 4.02434 21.9757 4.78924 22.455 5.73005C22.7568 6.32234 22.8826 6.96253 22.9422 7.69138C22.9503 7.79092 22.9573 7.89376 22.9633 8H1.03669C1.04269 7.89376 1.04968 7.79092 1.05782 7.69138C1.11737 6.96253 1.24318 6.32234 1.54497 5.73005C2.02433 4.78924 2.78924 4.02434 3.73005 3.54497C4.32234 3.24318 4.96253 3.11737 5.69138 3.05782C6.39925 2.99998 7.27341 2.99999 8.35719 3H15.6428Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M22.9999 10H1.00008L1 13.6428C0.999991 14.7266 0.999983 15.6008 1.05782 16.3086C1.11737 17.0375 1.24318 17.6777 1.54497 18.27C2.02433 19.2108 2.78924 19.9757 3.73005 20.455C4.32234 20.7568 4.96253 20.8826 5.69138 20.9422C6.39923 21 7.27334 21 8.35706 21H15.6428C16.7266 21 17.6008 21 18.3086 20.9422C19.0375 20.8826 19.6777 20.7568 20.27 20.455C21.2108 19.9757 21.9757 19.2108 22.455 18.27C22.7568 17.6777 22.8826 17.0375 22.9422 16.3086C23 15.6007 23 14.7266 23 13.6428L22.9999 10ZM5.85 12C5.29772 12 4.85 12.4477 4.85 13C4.85 13.5523 5.29772 14 5.85 14H9.15C9.70228 14 10.15 13.5523 10.15 13C10.15 12.4477 9.70228 12 9.15 12H5.85Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Picreditcardsolid;
