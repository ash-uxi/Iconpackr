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
 * Pilayertwoduosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pilayertwoduosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "layer two icon",
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
      d="M12.543 4.298a3.1 3.1 0 0 0-1.086 0c-.41.073-.789.252-1.226.46L3.835 7.781c-.336.159-.647.306-.884.445-.228.133-.571.359-.768.75a1.72 1.72 0 0 0 0 1.545c.197.393.54.617.768.751.237.14.548.286.884.445l6.396 3.025c.437.207.816.386 1.226.46.359.063.727.063 1.086 0 .41-.074.789-.253 1.226-.46l6.396-3.025c.336-.159.647-.306.884-.445.228-.133.571-.358.768-.75a1.72 1.72 0 0 0 0-1.545c-.197-.392-.54-.618-.768-.751-.237-.14-.548-.286-.884-.445l-6.396-3.025c-.437-.207-.816-.386-1.226-.46"
    />{" "}
    <path
      d="M20.923 14.574c-.118.235-.486.41-1.222.757l-6.272 2.966c-.524.248-.786.372-1.06.42a2.1 2.1 0 0 1-.737 0c-.275-.048-.537-.172-1.061-.42l-6.272-2.966c-.736-.348-1.104-.522-1.222-.757"
      opacity={0.28}
    />
  </Svg>
);

export default Pilayertwoduosolid;
