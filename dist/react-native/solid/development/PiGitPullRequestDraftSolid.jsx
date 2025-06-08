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
 * Pigitpullrequestdraftsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitpullrequestdraftsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git pull request draft icon",
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
      d="M12 6C12 5.44772 12.4477 5 13 5C13.4097 5 13.8107 5.0412 14.1989 5.12C14.7402 5.22987 15.0899 5.7577 14.98 6.29895C14.8701 6.8402 14.3423 7.1899 13.8011 7.08003C13.5431 7.02766 13.2753 7 13 7C12.4477 7 12 6.55228 12 6Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M14 18C14 16.1362 15.2748 14.5701 17 14.126V13C17 12.4477 17.4477 12 18 12C18.5523 12 19 12.4477 19 13V14.126C20.7252 14.5701 22 16.1362 22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M16.3993 7.20002C16.8409 6.86828 17.4678 6.95729 17.7995 7.39884C18.0769 7.76802 18.3128 8.17057 18.5003 8.59963C18.7214 9.10572 18.4904 9.69523 17.9843 9.91635C17.4782 10.1375 16.8887 9.90646 16.6676 9.40037C16.5429 9.11504 16.3857 8.84673 16.2005 8.60019C15.8688 8.15864 15.9578 7.53176 16.3993 7.20002Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M2 6C2 3.79086 3.79086 2 6 2C8.20914 2 10 3.79086 10 6C10 7.86384 8.72523 9.42994 7 9.87398V21C7 21.5523 6.55228 22 6 22C5.44772 22 5 21.5523 5 21V9.87398C3.27477 9.42994 2 7.86384 2 6Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pigitpullrequestdraftsolid;
