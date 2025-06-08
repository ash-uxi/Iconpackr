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
 * Pisettings02duosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pisettings02duosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "settings02 icon",
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
    <path d="M10.991 12c0-.552.457-1 1.01-1s1.009.448 1.009 1-.457 1-1.01 1-1.009-.448-1.009-1" />{" "}
    <path
      fill={color || "#000"}
      d="M14.577 4.058c-.622-2.744-4.532-2.744-5.154 0l-.051.226a.643.643 0 0 1-.97.402l-.196-.124c-2.38-1.5-5.144 1.264-3.644 3.644l.123.197a.643.643 0 0 1-.4.969l-.227.051c-2.744.622-2.744 4.532 0 5.154l.226.051a.643.643 0 0 1 .402.97l-.124.196c-1.5 2.38 1.264 5.144 3.644 3.644l.197-.123a.642.642 0 0 1 .969.4l.051.227c.622 2.744 4.532 2.744 5.154 0l.051-.226a.643.643 0 0 1 .97-.402l.196.124c2.38 1.5 5.144-1.264 3.644-3.644l-.123-.197a.643.643 0 0 1 .4-.969l.227-.051c2.744-.622 2.744-4.532 0-5.154l-.226-.051a.642.642 0 0 1-.402-.97l.124-.196c1.5-2.38-1.264-5.144-3.644-3.644l-.197.123a.643.643 0 0 1-.969-.4z"
      opacity={0.28}
    />
  </Svg>
);

export default Pisettings02duosolid;
