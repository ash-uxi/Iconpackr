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
 * Pimacfinderstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimacfinderstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "mac finder icon",
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
      d="M7 8V9M17 8V9M17 16C15.5168 16.9106 13.8126 17.4286 12 17.4286C10.1874 17.4286 8.4832 16.9106 7 16M13.1762 3C11.779 6.04423 11 9.43114 11 13H15C15 15.7817 15.209 18.4748 15.6617 20.9941M13.1762 3H10C7.19974 3 5.79961 3 4.73005 3.54497C3.78924 4.02433 3.02433 4.78924 2.54497 5.73005C2 6.79961 2 8.19974 2 11V13C2 15.8003 2 17.2004 2.54497 18.27C3.02433 19.2108 3.78924 19.9757 4.73005 20.455C5.79961 21 7.19974 21 10 21H14C14.6183 21 15.1684 21 15.6617 20.9941M13.1762 3H14C16.8003 3 18.2004 3 19.27 3.54497C20.2108 4.02433 20.9757 4.78924 21.455 5.73005C22 6.79961 22 8.19974 22 11V13C22 15.8003 22 17.2004 21.455 18.27C20.9757 19.2108 20.2108 19.9757 19.27 20.455C18.4366 20.8797 17.4025 20.9734 15.6617 20.9941"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pimacfinderstroke;
