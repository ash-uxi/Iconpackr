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
 * Pibumbleduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibumbleduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "bumble icon",
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
    <path d="M7.083 12h10m-7 4.045h4M9.083 8h6" />{" "}
    <path
      fill={color || "#000"}
      d="M8.618 2c-.557 0-1.047-.001-1.504.147a3 3 0 0 0-1.08.624c-.356.32-.601.745-.879 1.228L1.69 10.001c-.279.482-.525.906-.624 1.375a3 3 0 0 0 0 1.248c.1.469.345.893.624 1.375l3.465 6.002c.278.482.523.907.88 1.228a3 3 0 0 0 1.08.624c.456.148.946.148 1.503.147h6.93c.557 0 1.047.001 1.503-.147.4-.13.768-.342 1.08-.624.357-.32.602-.745.88-1.228l3.465-6.002c.279-.482.524-.906.624-1.375a3 3 0 0 0 0-1.248c-.1-.469-.345-.893-.624-1.375L19.01 3.999c-.278-.483-.523-.908-.88-1.228a3 3 0 0 0-1.08-.624c-.456-.148-.946-.148-1.503-.147z"
      opacity={0.28}
    />
  </Svg>
);

export default Pibumbleduosolid;
