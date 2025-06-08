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
 * Piluggagetrolleycontrast icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piluggagetrolleycontrast = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "luggage trolley icon",
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
    <path d="M21 19H8M3 3a2 2 0 0 1 2 2v11m0 0a3 3 0 1 0 3 3m-3-3a3 3 0 0 1 3 3m7-13.5h-2.8c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C9 7.02 9 7.58 9 8.7v3.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.428.218.988.218 2.108.218h5.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 13.98 21 13.42 21 12.3V8.7c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 5.5 18.92 5.5 17.8 5.5zm0 0V9" />
    <path
      fill={color}
      d="M9 8.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C10.52 5.5 11.08 5.5 12.2 5.5h5.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 7.02 21 7.58 21 8.7v3.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218h-5.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C9 13.98 9 13.42 9 12.3z"
      opacity={0.28}
    />
  </Svg>
);

export default Piluggagetrolleycontrast;
