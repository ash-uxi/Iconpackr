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
 * Pibatterychargingduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibatterychargingduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "battery charging icon",
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
    <path d="m12 6-3.831 4.98c-.367.478-.55.716-.542.9a.5.5 0 0 0 .225.393c.154.101.453.064 1.05-.01l4.196-.525c.597-.075.896-.112 1.05-.011a.5.5 0 0 1 .225.393c.009.184-.175.422-.542.9L10 18" />{" "}
    <path
      fill={color || "#000"}
      d="M7.964 5c-.901 0-1.629 0-2.22.04-.61.042-1.148.13-1.657.34A5 5 0 0 0 1.38 8.088c-.212.51-.3 1.048-.34 1.656C1 10.335 1 11.063 1 11.964v.072c0 .901 0 1.629.04 2.22.042.61.13 1.148.34 1.657a5 5 0 0 0 2.707 2.706c.51.212 1.048.3 1.656.34.592.041 1.32.041 2.221.041h6.072c.901 0 1.629 0 2.22-.04.61-.042 1.148-.13 1.657-.34a5 5 0 0 0 2.706-2.707 4.2 4.2 0 0 0 .262-.946q.137-.019.266-.052a2.5 2.5 0 0 0 1.768-1.768c.086-.323.086-.685.085-1.054v-.186c0-.369.001-.731-.085-1.054a2.5 2.5 0 0 0-1.768-1.768 2 2 0 0 0-.266-.052 4.2 4.2 0 0 0-.262-.946 5 5 0 0 0-2.706-2.706c-.51-.212-1.048-.3-1.656-.34C15.665 5 14.937 5 14.035 5z"
      opacity={0.28}
    />
  </Svg>
);

export default Pibatterychargingduosolid;
