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
 * Piglobesolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piglobesolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "globe icon",
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
      d="M1.89844 11.0001C2.40073 5.86379 6.73154 1.8501 11.9998 1.8501C11.7189 1.8501 11.4509 1.96826 11.2615 2.17567C9.03041 4.61818 7.67567 7.72235 7.39246 11.0001H1.89844Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M11.9998 19.5917C10.5406 17.6785 9.64025 15.3961 9.40106 13.0001H14.5985C14.3594 15.3961 13.459 17.6785 11.9998 19.5917Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M11.9998 4.40847C10.5406 6.32173 9.64025 8.60411 9.40106 11.0001H14.5985C14.3594 8.60411 13.459 6.32173 11.9998 4.40847Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M12.7381 2.17567C12.5487 1.96826 12.2807 1.8501 11.9998 1.8501C17.2681 1.8501 21.5989 5.86379 22.1012 11.0001H16.6071C16.3239 7.72235 14.9692 4.61818 12.7381 2.17567Z"
      fill={color}
      stroke="none"
    />
    <path
      d="M22.1012 13.0001H16.6071C16.3239 16.2778 14.9692 19.382 12.7381 21.8245C12.5487 22.0319 12.2807 22.1501 11.9998 22.1501C11.7189 22.1501 11.4509 22.0319 11.2615 21.8245C9.03041 19.382 7.67567 16.2778 7.39246 13.0001H1.89844C2.40073 18.1364 6.73154 22.1501 11.9998 22.1501C17.2681 22.1501 21.5989 18.1364 22.1012 13.0001Z"
      fill={color}
      stroke="none"
    />
  </Svg>
);

export default Piglobesolid;
