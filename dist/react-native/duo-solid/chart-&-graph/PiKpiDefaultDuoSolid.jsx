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
 * Pikpidefaultduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pikpidefaultduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "kpi default icon",
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
    <path d="M12 13.393V8.75h1a2 2 0 0 1 2 2v.643a2 2 0 0 1-2 2zm0 0v1.857m6-6.5v6.5m-12-3.5v-3m0 3v3.5m0-3.5 3-3m-3 3 3 3.5" />{" "}
    <path
      fill={color || "#000"}
      fillRule="evenodd"
      d="M9.4 3.47h-.043c-1.084 0-1.958 0-2.666.059-.728.06-1.369.185-1.96.487A5 5 0 0 0 2.545 6.2c-.302.592-.428 1.233-.487 1.96C2 8.87 2 9.745 2 10.829v3.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.96a5 5 0 0 0 2.185 2.186c.592.302 1.233.428 1.961.487.708.058 1.582.058 2.666.058h5.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961.058-.708.058-1.582.058-2.666v-3.286c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.37-.487-1.96a5 5 0 0 0-2.185-2.186c-.592-.302-1.232-.428-1.961-.487-.708-.058-1.582-.058-2.666-.058z"
      clipRule="evenodd"
      opacity={0.28}
    />
  </Svg>
);

export default Pikpidefaultduosolid;
