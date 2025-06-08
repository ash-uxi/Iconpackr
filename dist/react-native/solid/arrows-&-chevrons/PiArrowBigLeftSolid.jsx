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
 * Piarrowbigleftsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigleftsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big left icon",
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
      d="M9.20908 4.19512C9.36588 4.07911 9.55319 4.01149 9.74793 4.00059C9.94268 3.98968 10.1364 4.03597 10.3051 4.13375C10.4739 4.23153 10.6104 4.37653 10.6978 4.5509C10.7852 4.72527 10.8197 4.92139 10.7971 5.11512C10.6861 6.07512 10.5971 7.03512 10.5331 7.99912H19.4291C19.6821 7.99912 19.9281 7.99912 20.1361 8.01612C20.4035 8.0314 20.6653 8.09973 20.9061 8.21712C21.2824 8.40887 21.5883 8.71482 21.7801 9.09112C21.8971 9.33201 21.9651 9.59375 21.9801 9.86112C21.9981 10.0691 21.9981 10.3151 21.9981 10.5671V13.4311C21.9981 13.6831 21.9981 13.9291 21.9811 14.1371C21.9657 14.4046 21.8974 14.6663 21.7801 14.9071C21.5883 15.2834 21.2824 15.5894 20.9061 15.7811C20.6653 15.8985 20.4035 15.9668 20.1361 15.9821C19.9271 15.9991 19.6811 15.9991 19.4281 15.9991H10.5331C10.5978 16.9628 10.6858 17.9247 10.7971 18.8841C10.8195 19.0778 10.7848 19.2738 10.6973 19.448C10.6098 19.6222 10.4733 19.767 10.3046 19.8646C10.1359 19.9623 9.94229 20.0085 9.74765 19.9976C9.55301 19.9866 9.36581 19.919 9.20908 19.8031C6.69044 17.9414 4.42358 15.7613 2.46508 13.3171C2.16531 12.9432 2.00195 12.4783 2.00195 11.9991C2.00195 11.5199 2.16531 11.055 2.46508 10.6811C4.42357 8.23697 6.69043 6.05683 9.20908 4.19512Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Piarrowbigleftsolid;
