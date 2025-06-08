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
 * Pipencilscaleduostroke icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipencilscaleduostroke = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "pencil scale icon",
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
      d="M12 18L16 18M12 10H16M12 6H15M12 14H15M7.5982 9L7.63593 4.77814C7.63669 4.43491 7.63706 4.26329 7.59857 4.10192C7.56445 3.95884 7.50795 3.82215 7.43115 3.69686C7.34454 3.55555 7.22326 3.43466 6.9807 3.19288L5.28241 1.5L3.65671 3.20798C3.42808 3.44818 3.31377 3.56828 3.23202 3.7067C3.15952 3.82944 3.10611 3.96244 3.07362 4.1011C3.03698 4.25748 3.03662 4.42292 3.0359 4.7538L2.99805 9.02514"
      stroke={color || "#000"}
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M12 18L16 18M12 10H16M12 6L15 6M12 14L15 14M15.2 22H17.8C18.9201 22 19.4802 22 19.908 21.782C20.2843 21.5903 20.5903 21.2843 20.782 20.908C21 20.4802 21 19.9201 21 18.8V5.2C21 4.0799 21 3.51984 20.782 3.09202C20.5903 2.7157 20.2843 2.40973 19.908 2.21799C19.4802 2 18.9201 2 17.8 2L15.2 2C14.0799 2 13.5198 2 13.092 2.21799C12.7157 2.40973 12.4097 2.71569 12.218 3.09202C12 3.51984 12 4.0799 12 5.2L12 18.8C12 19.9201 12 20.4802 12.218 20.908C12.4097 21.2843 12.7157 21.5903 13.092 21.782C13.5198 22 14.0799 22 15.2 22ZM5.28218 1.5L6.98047 3.19288C7.22303 3.43466 7.34431 3.55555 7.43092 3.69686C7.50772 3.82215 7.56422 3.95884 7.59834 4.10192C7.63683 4.26329 7.63646 4.43491 7.6357 4.77814L7.60026 20.9487C7.60017 20.9879 7.60013 21.0075 7.59966 21.0248C7.58242 21.6632 7.13559 22.2109 6.51328 22.3565C6.49635 22.3605 6.47715 22.3645 6.43874 22.3725L6.38561 22.3835C5.6275 22.5412 4.84547 22.5388 4.08977 22.3763C3.45231 22.2393 2.99857 21.6759 3 21.0233L3.03566 4.7538C3.03639 4.42292 3.03675 4.25748 3.07339 4.1011C3.10588 3.96244 3.15929 3.82944 3.23179 3.7067C3.31354 3.56828 3.42785 3.44818 3.65648 3.20798L5.28218 1.5Z"
      stroke={color || "#000"}
      strokeWidth="2"
      opacity={0.28}
      fill="none"
    />
  </Svg>
);

export default Pipencilscaleduostroke;
