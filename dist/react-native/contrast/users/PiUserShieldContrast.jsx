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
 * Piusershieldcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piusershieldcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "user shield icon",
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
    <g fill={color} opacity={0.28}>
      <path d="m14.807 15.135 2.306-.73c.233-.073.486-.073.719 0l2.338.74c.431.137.735.504.773.934l.04.453c.167 1.905-.904 3.714-2.705 4.57l-.284.134a1.19 1.19 0 0 1-1.037-.01l-.327-.163c-1.683-.841-2.705-2.527-2.626-4.331l.027-.618c.02-.448.329-.837.776-.979M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M11.047 15H8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h5.91v-.505a7.45 7.45 0 0 1-.903-3.9l.027-.618q.018-.394.106-.762h-.093z" />
    </g>
    <path d="M11.047 21H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h2.16M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m1.113 7.406-2.306.73a1.09 1.09 0 0 0-.776.978l-.027.617c-.079 1.805.943 3.49 2.626 4.332l.327.163c.323.162.71.166 1.037.01l.284-.135c1.801-.855 2.872-2.664 2.705-4.57l-.04-.452a1.09 1.09 0 0 0-.773-.933l-2.338-.74a1.2 1.2 0 0 0-.719 0" />
  </Svg>
);

export default Piusershieldcontrast;
