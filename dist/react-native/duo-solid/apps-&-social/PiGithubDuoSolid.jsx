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
 * Pigithubduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pigithubduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "github icon",
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
      d="M10 15a3.72 3.72 0 0 0-1 2.58v1.47m0 0V21m0-1.95a5.7 5.7 0 0 1-2.82.36c-1.52-.52-1.12-1.9-1.9-2.47A2.37 2.37 0 0 0 3 16.5M14 15a3.72 3.72 0 0 1 1 2.58V21"
      opacity={0.28}
    />{" "}
    <path
      fill={color || "#000"}
      d="M18.247 2.195c-.407-.204-.851-.214-1.198-.18a5 5 0 0 0-1.117.262 10 10 0 0 0-1.894.916q-1.015-.143-2.043-.134-1.023 0-2.036.151a10 10 0 0 0-1.856-.921 4.7 4.7 0 0 0-1.13-.267c-.366-.034-.806-.012-1.215.19-.472.233-.747.645-.907 1a4.1 4.1 0 0 0-.305 1.183 7.7 7.7 0 0 0 .087 2.227A7.3 7.3 0 0 0 4 9.762c.002 1.722.574 3.339 1.964 4.504 1.365 1.144 3.38 1.733 6.036 1.733s4.67-.589 6.036-1.733c1.39-1.165 1.96-2.781 1.964-4.503a7.3 7.3 0 0 0-.634-3.162 7.6 7.6 0 0 0 .06-2.25 4.3 4.3 0 0 0-.303-1.163c-.146-.333-.408-.759-.876-.993"
    />
  </Svg>
);

export default Pigithubduosolid;
