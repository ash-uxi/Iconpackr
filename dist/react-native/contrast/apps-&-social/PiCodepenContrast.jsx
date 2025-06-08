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
 * Picodepencontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Picodepencontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "codepen icon",
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
    <path d="M12 21.422v-6.584m0-12.26v6.584m9.659 6.1L13.72 9.703a3 3 0 0 0-3.44 0L2.34 15.261m19.318 0c.22-.422.341-.897.341-1.389v-3.744c0-.491-.12-.967-.341-1.39m0 6.523c-.235.45-.585.84-1.024 1.126l-7 4.55a3 3 0 0 1-3.27 0l-7-4.55a3 3 0 0 1-1.024-1.126M21.66 8.74l-7.939 5.557a3 3 0 0 1-3.44 0L2.34 8.739m19.318 0a3 3 0 0 0-1.024-1.126l-7-4.55a3 3 0 0 0-3.27 0l-7 4.55c-.44.285-.789.676-1.024 1.126m0 0c-.22.422-.341.898-.341 1.39v3.743c0 .492.12.967.341 1.39" />
    <path
      fill={color}
      d="m20.635 7.613-7-4.55a3 3 0 0 0-3.27 0l-7 4.55A3 3 0 0 0 2 10.128v3.744a3 3 0 0 0 1.365 2.515l7 4.55a3 3 0 0 0 3.27 0l7-4.55A3 3 0 0 0 22 13.872v-3.744a3 3 0 0 0-1.365-2.515"
      opacity={0.28}
    />
  </Svg>
);

export default Picodepencontrast;
