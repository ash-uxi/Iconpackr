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
 * Pimusicquavernoteoffcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pimusicquavernoteoffcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "music quaver note off icon",
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
      d="M12 16.654a1 1 0 0 1 1 1v1.344a4 4 0 0 1-5.504 3.71 1 1 0 0 1-.33-1.634l3.908-3.91q.056-.055.118-.1a1 1 0 0 1 .808-.41"
      clipRule="evenodd"
      opacity={0.28}
    />
    <path d="M12 18.998a3 3 0 0 1-4.127 2.783M12 18.998c0-.398-.078-.778-.218-1.126M12 18.998v-1.344M12 12V3.643a1.64 1.64 0 0 1 2.374-1.468A6.56 6.56 0 0 1 17.75 6.25M12 12l5.75-5.75M12 12l-4.285 4.285M22 2l-4.25 4.25M7.715 16.285a3 3 0 0 0-1.426 1.426m1.426-1.426-1.426 1.426m0 0L2 22" />
  </Svg>
);

export default Pimusicquavernoteoffcontrast;
