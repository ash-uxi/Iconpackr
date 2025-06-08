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
 * Piairplaystroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piairplaystroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "airplay icon",
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
      d="M8 14C7.44287 13.2572 7.1036 12.3738 7.02021 11.449C6.93682 10.5242 7.1126 9.59446 7.52787 8.76393C7.94313 7.9334 8.58147 7.23492 9.37135 6.74675C10.1612 6.25857 11.0714 6 12 6C12.9286 6 13.8388 6.25857 14.6287 6.74675C15.4185 7.23492 16.0569 7.9334 16.4721 8.76393C16.8874 9.59446 17.0632 10.5242 16.9798 11.449C16.8964 12.3738 16.5571 13.2572 16 14M18.2326 17.4927C19.2323 16.5331 20.0022 15.3502 20.4739 14.0321C21.1244 12.2142 21.173 10.2352 20.6125 8.38751C20.052 6.53982 18.9122 4.92136 17.3613 3.77116C15.8105 2.62095 13.9308 2 12 2C10.0692 2 8.18953 2.62095 6.63867 3.77116C5.08782 4.92136 3.94799 6.53982 3.38751 8.38751C2.82704 10.2352 2.87564 12.2142 3.52614 14.0321C3.9978 15.3503 4.76775 16.5331 5.76744 17.4927M9.88679 21.0008H14.1132C15.0554 21.0008 15.5265 21.0008 15.792 20.8036C16.0234 20.6317 16.1694 20.3683 16.1925 20.081C16.219 19.7513 15.9693 19.3518 15.47 18.5528L14.7136 17.3426C13.8138 15.9028 13.3638 15.183 12.7878 14.9361C12.2847 14.7205 11.7153 14.7205 11.2122 14.9361C10.6361 15.183 10.1862 15.9028 9.28639 17.3426L8.52999 18.5528C8.03063 19.3518 7.78095 19.7513 7.80745 20.081C7.83055 20.3683 7.97655 20.6317 8.20799 20.8036C8.4735 21.0008 8.9446 21.0008 9.88679 21.0008ZM12 12C11.4477 12 11 11.5523 11 11C11 10.4477 11.4477 10 12 10C12.5523 10 13 10.4477 13 11C13 11.5523 12.5523 12 12 12Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piairplaystroke;
