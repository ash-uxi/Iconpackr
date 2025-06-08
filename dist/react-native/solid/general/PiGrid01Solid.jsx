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
 * Pigrid01solid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigrid01solid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "grid01 icon",
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
      d="M11 2H9.35719C8.27341 1.99999 7.39925 1.99998 6.69138 2.05782C5.96253 2.11737 5.32234 2.24318 4.73005 2.54497C3.78924 3.02434 3.02434 3.78924 2.54497 4.73005C2.24318 5.32234 2.11737 5.96253 2.05782 6.69138C1.99998 7.39925 1.99999 8.27341 2 9.35719V11L11 11V2Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M13 22H14.6428C15.7266 22 16.6008 22 17.3086 21.9422C18.0375 21.8826 18.6777 21.7568 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C21.7568 18.6777 21.8826 18.0375 21.9422 17.3086C22 16.6008 22 15.7267 22 14.6429V13L13 13V22Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M2 13V14.6428C1.99999 15.7266 1.99998 16.6007 2.05782 17.3086C2.11737 18.0375 2.24318 18.6777 2.54497 19.27C3.02434 20.2108 3.78924 20.9757 4.73005 21.455C5.32234 21.7568 5.96253 21.8826 6.69138 21.9422C7.39923 22 8.27334 22 9.35707 22H11V13L2 13Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M22 11V9.35717C22 8.27344 22 7.39923 21.9422 6.69138C21.8826 5.96253 21.7568 5.32234 21.455 4.73005C20.9757 3.78924 20.2108 3.02434 19.27 2.54497C18.6777 2.24318 18.0375 2.11737 17.3086 2.05782C16.6007 1.99998 15.7266 1.99999 14.6428 2H13V11L22 11Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pigrid01solid;
