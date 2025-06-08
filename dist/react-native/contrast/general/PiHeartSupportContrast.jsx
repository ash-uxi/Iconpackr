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
 * Piheartsupportcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piheartsupportcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "heart support icon",
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
      d="M12 21C11 21 2 15.977 2 8.944 2 3.502 8.832.654 12 5.427c3.162-4.765 10-1.92 10 3.517 0 1.85-.623 3.562-1.56 5.08C17.817 18.273 12.737 21 12 21"
      opacity={0.28}
    />
    <path d="M12 5.427C8.832.653 2 3.502 2 8.944 2 15.977 11 21 12 21c.737 0 5.817-2.727 8.44-6.976M12 5.427c3.162-4.765 10-1.92 10 3.517 0 1.85-.623 3.562-1.56 5.08M12 5.427l-2.81 3.56a2.168 2.168 0 0 0 3.334 2.771L14.5 9.5a9.66 9.66 0 0 0 5.94 4.524" />
  </Svg>
);

export default Piheartsupportcontrast;
