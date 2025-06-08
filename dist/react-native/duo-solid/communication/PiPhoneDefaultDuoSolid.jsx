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
 * Piphonedefaultduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piphonedefaultduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "phone default icon",
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
      fill={color || "#000"}
      d="M17.748 13.973a6.43 6.43 0 0 0-5.763 1.511c-.566.515-1.09 1.146-1.55 1.701-.167.2-.326.392-.476.564a1 1 0 0 0 .228 1.505c2.299 1.427 4.992 2.351 7.983 2.704 1.616.19 3.456-.8 3.765-2.694a6 6 0 0 0 .018-1.645c-.147-1.235-.832-2.082-1.661-2.64-.797-.535-1.747-.823-2.544-1.006"
    />{" "}
    <path d="M5.407 12.974a15.8 15.8 0 0 0 5.307 5.43" opacity={0.28} />{" "}
    <path
      fill={color || "#000"}
      d="M6.277 2.033c-.44-.04-1.025-.057-1.541.027-1.895.31-2.885 2.151-2.694 3.766.336 2.85 1.19 5.43 2.504 7.656a1 1 0 0 0 1.47.285q.242-.183.516-.386c.49-.363 1.041-.77 1.514-1.208A6.43 6.43 0 0 0 9.905 5.86C9.708 5.09 9.4 4.21 8.853 3.482c-.574-.76-1.411-1.344-2.576-1.45"
    />
  </Svg>
);

export default Piphonedefaultduosolid;
