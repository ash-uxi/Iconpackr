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
 * Pieggbrokenstroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pieggbrokenstroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "egg broken icon",
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
      d="M11.657 13.6758C10.3484 13.2337 9.41664 12.3473 8.71951 11.2367C8.70623 11.2156 8.7075 11.1884 8.72277 11.1672L10.5359 8.65775C10.5601 8.62426 10.5614 8.58098 10.5391 8.54815C9.74756 7.37915 8.6865 6.41191 7.44635 5.68458M7.44635 5.68458C5.72039 8.22899 4.61133 11.7483 4.61133 14.1111C4.61133 18.1919 7.91945 21.5 12.0002 21.5C16.081 21.5 19.3891 18.1919 19.3891 14.1111C19.3891 10.0303 16.081 2.5 12.0002 2.5C10.2823 2.5 8.70125 3.8346 7.44635 5.68458Z"
      stroke={color}
      strokeWidth="2"
      fill="none"
    />
  </Svg>
);

export default Pieggbrokenstroke;
