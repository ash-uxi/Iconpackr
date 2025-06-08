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
 * Pishieldcheckcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pishieldcheckcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "shield check icon",
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
      d="m5.495 4.314 5.388-1.946a3 3 0 0 1 2.038 0l5.465 1.974a3 3 0 0 1 1.972 2.591l.227 2.95A11 11 0 0 1 14.857 20.4l-1.49.806a3 3 0 0 1-2.914-.032l-1.52-.867a11 11 0 0 1-5.544-9.978l.127-3.31a3 3 0 0 1 1.98-2.705"
      opacity={0.28}
    />
    <path d="m9.133 12.02 2.007 2.004a13.06 13.06 0 0 1 3.993-4.29m-4.25-7.366L5.497 4.314A3 3 0 0 0 3.517 7.02l-.127 3.309a11 11 0 0 0 5.543 9.978l1.521.867a3 3 0 0 0 2.915.032l1.489-.806a11 11 0 0 0 5.728-10.516l-.227-2.95a3 3 0 0 0-1.972-2.592l-5.465-1.974a3 3 0 0 0-2.038 0" />
  </Svg>
);

export default Pishieldcheckcontrast;
