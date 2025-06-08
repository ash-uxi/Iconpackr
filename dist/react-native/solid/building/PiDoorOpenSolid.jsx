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
 * Pidooropensolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pidooropensolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "door open icon",
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
      fill={color}
      fillRule="evenodd"
      d="M11.705.466a2.2 2.2 0 0 1 .868.082c.272.075.595.197.94.326l3.243 1.217.611.23c.579.225 1.06.444 1.447.785l.156.146c.35.35.625.77.802 1.235l.08.245c.16.582.148 1.238.148 2.04v14.011l-6.51 2.373c-.343.125-.664.244-.934.316a2.2 2.2 0 0 1-.865.074l-.14-.026a2 2 0 0 1-1.115-.703l-.113-.157c-.212-.326-.273-.677-.299-.96-.025-.278-.024-.62-.024-.986V3.309c0-.369 0-.714.024-.995.026-.284.088-.637.302-.965l.114-.158a2 2 0 0 1 1.124-.7zm1.324 10.152a1 1 0 1 0 0 2h.918a1 1 0 0 0 0-2z"
      clipRule="evenodd"
      stroke="none"
    />
    <path
      d="M2 20h9m8 0h3M5 20V7.98c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.092C6.9 3.98 7.6 3.98 9 3.98h2"
      stroke="none"
    />
  </Svg>
);

export default Pidooropensolid;
