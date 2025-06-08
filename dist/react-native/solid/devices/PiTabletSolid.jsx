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
 * Pitabletsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pitabletsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "tablet icon",
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
      d="M9.35719 1H14.6428C15.7266 0.99999 16.6007 0.999983 17.3086 1.05782C18.0375 1.11737 18.6777 1.24318 19.27 1.54497C20.2108 2.02434 20.9757 2.78924 21.455 3.73005C21.7568 4.32234 21.8826 4.96253 21.9422 5.69138C22 6.39923 22 7.27334 22 8.35706V15.6428C22 16.7266 22 17.6008 21.9422 18.3086C21.8826 19.0375 21.7568 19.6777 21.455 20.27C20.9757 21.2108 20.2108 21.9757 19.27 22.455C18.6777 22.7568 18.0375 22.8826 17.3086 22.9422C16.6008 23 15.7267 23 14.6429 23H9.35717C8.27344 23 7.39923 23 6.69138 22.9422C5.96253 22.8826 5.32234 22.7568 4.73005 22.455C3.78924 21.9757 3.02434 21.2108 2.54497 20.27C2.24318 19.6777 2.11737 19.0375 2.05782 18.3086C1.99998 17.6007 1.99999 16.7266 2 15.6428V8.35719C1.99999 7.27341 1.99998 6.39925 2.05782 5.69138C2.11737 4.96253 2.24318 4.32234 2.54497 3.73005C3.02434 2.78924 3.78924 2.02434 4.73005 1.54497C5.32234 1.24318 5.96253 1.11737 6.69138 1.05782C7.39925 0.999983 8.27341 0.99999 9.35719 1ZM10 18C9.44772 18 9 18.4477 9 19C9 19.5523 9.44772 20 10 20H14C14.5523 20 15 19.5523 15 19C15 18.4477 14.5523 18 14 18H10Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Pitabletsolid;
