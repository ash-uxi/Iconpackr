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
 * Pigitbranchplussolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitbranchplussolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git branch plus icon",
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
      d="M18 1.5C16.1223 1.5 14.5468 2.79378 14.1163 4.53851C11.209 4.79307 8.65837 6.29174 7 8.49903V3C7 2.44772 6.55228 2 6 2C5.44772 2 5 2.44772 5 3V14.626C3.27477 15.0701 2 16.6362 2 18.5C2 20.7091 3.79086 22.5 6 22.5C8.20914 22.5 10 20.7091 10 18.5C10 16.6362 8.72523 15.0701 7 14.626V14.5C7 10.3729 10.1252 6.97575 14.1381 6.54589C14.5979 8.24778 16.1527 9.5 18 9.5C20.2091 9.5 22 7.70914 22 5.5C22 3.29086 20.2091 1.5 18 1.5Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M19 15C19 14.4477 18.5523 14 18 14C17.4477 14 17 14.4477 17 15V17H15C14.4477 17 14 17.4477 14 18C14 18.5523 14.4477 19 15 19H17V21C17 21.5523 17.4477 22 18 22C18.5523 22 19 21.5523 19 21V19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H19V15Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pigitbranchplussolid;
