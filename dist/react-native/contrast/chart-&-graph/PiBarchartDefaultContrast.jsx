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
 * Pibarchartdefaultcontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pibarchartdefaultcontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "barchart default icon",
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
    <path d="M9 21v-6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C7.398 12 6.932 12 6 12s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 13.602 3 14.068 3 15v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 21 5.08 21 6.2 21zm0 0h6m-6 0V6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C10.602 3 11.068 3 12 3s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C15 4.602 15 5.068 15 6v15m0 0h2.8c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8V11c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 8 18.932 8 18 8s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C15 9.602 15 10.068 15 11z" />
    <path
      fill={color}
      d="M9 6c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C10.602 3 11.068 3 12 3s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C15 4.602 15 5.068 15 6v5c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C16.602 8 17.068 8 18 8s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 9.602 21 10.068 21 11v6.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 21 18.92 21 17.8 21H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8V15c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 12 5.068 12 6 12s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C9 13.602 9 14.068 9 15z"
      opacity={0.28}
    />
  </Svg>
);

export default Pibarchartdefaultcontrast;
