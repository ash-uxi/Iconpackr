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
 * Pishieldbugcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pishieldbugcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "shield bug icon",
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
    <path d="M13.258 9.018a1.333 1.333 0 1 0-2.515 0m2.515 0h.858q.317.315.543.712m-1.401-.712h-2.515m0 0h-.858q-.316.315-.543.712M16 7.557v.812c0 .636-.448 1.183-1.072 1.307l-.269.054M8 7.557v.812c0 .636.449 1.183 1.072 1.307l.27.054m7.103 5.51v-1.13c0-.635-.449-1.182-1.072-1.307l-.486-.097M7.556 15.24v-1.13c0-.635.449-1.182 1.072-1.307l.485-.097m5.775 0c.144-.384.223-.804.223-1.244 0-.634-.165-1.227-.452-1.732m.228 2.976c-.46 1.225-1.579 2.09-2.887 2.09-1.307 0-2.427-.865-2.887-2.09m0 0a3.5 3.5 0 0 1-.224-1.244c0-.634.166-1.227.453-1.732m1.542-7.362L5.496 4.313A3 3 0 0 0 3.517 7.02l-.127 3.308a11 11 0 0 0 5.543 9.979l1.521.867a3 3 0 0 0 2.915.032l1.489-.807a11 11 0 0 0 5.728-10.516l-.227-2.95a3 3 0 0 0-1.972-2.592l-5.465-1.973a3 3 0 0 0-2.038 0" />
    <path
      fill={color}
      d="m5.496 4.313 5.388-1.945a3 3 0 0 1 2.038 0l5.465 1.973a3 3 0 0 1 1.972 2.592l.227 2.95A11 11 0 0 1 14.858 20.4l-1.49.807a3 3 0 0 1-2.914-.032l-1.52-.867a11 11 0 0 1-5.544-9.979l.127-3.308a3 3 0 0 1 1.98-2.707"
      opacity={0.28}
    />
  </Svg>
);

export default Pishieldbugcontrast;
