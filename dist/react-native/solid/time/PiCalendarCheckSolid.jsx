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
 * Picalendarchecksolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picalendarchecksolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "calendar check icon",
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
      d="M8 1C8.55228 1 9 1.44772 9 2V3.03923C9.8048 2.99996 10.7588 2.99998 11.916 3H12.084C13.2412 2.99998 14.1952 2.99996 15 3.03923V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3.30517C17.2333 3.3668 17.4586 3.44164 17.6788 3.53284C19.394 4.2433 20.7567 5.60602 21.4672 7.32122C21.7853 8.08933 21.906 8.92567 21.9584 9.94891C22 10.7623 22 11.7511 22 12.974V13.0369C22 14.4035 22 15.4801 21.9406 16.351C21.88 17.2387 21.7544 17.9853 21.4672 18.6788C20.7567 20.394 19.394 21.7567 17.6788 22.4672C16.9853 22.7544 16.2387 22.88 15.351 22.9406C14.4801 23 13.4035 23 12.0369 23H11.9631C10.5965 23 9.51986 23 8.649 22.9406C7.76134 22.88 7.01469 22.7544 6.32122 22.4672C4.60602 21.7567 3.2433 20.394 2.53284 18.6788C2.2456 17.9853 2.11997 17.2387 2.05941 16.351C1.99999 15.4801 2 14.4035 2 13.0369V12.974C2 11.7512 2 10.7623 2.04161 9.94891C2.09395 8.92567 2.21468 8.08933 2.53284 7.32122C3.2433 5.60602 4.60602 4.2433 6.32122 3.53284C6.5414 3.44164 6.76667 3.3668 7 3.30517V2C7 1.44772 7.44772 1 8 1ZM15.8139 12.2721C16.27 11.9607 16.3873 11.3385 16.0758 10.8824C15.7644 10.4263 15.1422 10.309 14.6861 10.6205C13.1519 11.6681 11.8107 12.9762 10.7474 14.5038L9.45673 13.2145C9.066 12.8242 8.43283 12.8245 8.04252 13.2153C7.6522 13.606 7.65254 14.2392 8.04327 14.6295L10.2172 16.8011C10.4376 17.0213 10.748 17.1262 11.0568 17.0848C11.3655 17.0434 11.6374 16.8605 11.792 16.5901C12.7789 14.8645 14.1614 13.4006 15.8139 12.2721Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Picalendarchecksolid;
