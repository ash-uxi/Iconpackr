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
 * Piphotoimagearrowdownstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piphotoimagearrowdownstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "photo image arrow down icon",
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
      d="M21.5713 19.5886C20.9368 20.4346 20.2008 21.1986 19.3801 21.8636C19.2691 21.9536 19.1345 21.9985 18.9999 21.9985M16.4285 19.5886C17.063 20.4346 17.799 21.1986 18.6197 21.8636C18.7307 21.9536 18.8653 21.9985 18.9999 21.9985M18.9999 21.9985V15.9985M12.68 21H10C9.24401 21 8.59006 21 8.01712 20.9893M21.9989 10H21C19.607 10 18.9104 10 18.324 10.0603C12.9031 10.6176 8.61758 14.9031 8.06029 20.324C8.03963 20.5249 8.02605 20.7388 8.01712 20.9893M21.9989 10C22 10.3123 22 10.6449 22 11V13C22 13.1211 22 13.2395 22 13.3555M21.9989 10C21.9912 7.84993 21.9309 6.66397 21.455 5.73005C20.9757 4.78924 20.2108 4.02433 19.27 3.54497C18.2004 3 16.8003 3 14 3H10C7.19974 3 5.79961 3 4.73005 3.54497C3.78924 4.02433 3.02433 4.78924 2.54497 5.73005C2 6.79961 2 8.19974 2 11V13C2 15.8003 2 17.2004 2.54497 18.27C3.02433 19.2108 3.78924 19.9757 4.73005 20.455C5.51086 20.8529 6.46784 20.9603 8.01712 20.9893M7.5 9.5C6.94772 9.5 6.5 9.05228 6.5 8.5C6.5 7.94772 6.94772 7.5 7.5 7.5C8.05228 7.5 8.5 7.94772 8.5 8.5C8.5 9.05228 8.05228 9.5 7.5 9.5Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Piphotoimagearrowdownstroke;
