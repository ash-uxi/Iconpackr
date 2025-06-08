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
 * Pigitbranchsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigitbranchsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "git branch icon",
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
      d="M14.1163 4.53851C14.5468 2.79378 16.1223 1.5 18 1.5C20.2091 1.5 22 3.29086 22 5.5C22 7.70914 20.2091 9.5 18 9.5C16.1527 9.5 14.5979 8.24778 14.1381 6.54589C10.1252 6.97575 7 10.3729 7 14.5V14.626C8.72523 15.0701 10 16.6362 10 18.5C10 20.7091 8.20914 22.5 6 22.5C3.79086 22.5 2 20.7091 2 18.5C2 16.6362 3.27477 15.0701 5 14.626V3C5 2.44772 5.44772 2 6 2C6.55228 2 7 2.44772 7 3V8.49903C8.65837 6.29174 11.209 4.79307 14.1163 4.53851Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Pigitbranchsolid;
