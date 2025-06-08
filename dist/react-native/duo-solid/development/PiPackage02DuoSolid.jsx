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
 * Pipackage02duosolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Pipackage02duosolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "package02 icon",
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
    <g opacity={0.28}>
      <path
        d="M6.35176 4.02086L4.88287 4.83377C4.0981 5.26749 3.51207 5.59137 3.07201 6.05989C3.06111 6.07149 3.0503 6.08314 3.03955 6.09486L12 10.867L15.1693 9.17909L6.35176 4.02086Z"
        fill={color || "#000"}
      />
      <path
        d="M13.0001 22.3797C13.579 22.2324 14.1301 21.927 14.8559 21.5248L19.1173 19.1662C19.9021 18.7325 20.4881 18.4086 20.9282 17.9401C21.3169 17.5263 21.613 17.0361 21.7946 16.5002C22.0013 15.8905 22.0008 15.2292 22.0002 14.365V9.635C22.0007 8.93952 22.0011 8.37547 21.8935 7.86394L18.2198 9.82046V12.8229C18.2198 13.3752 17.772 13.8229 17.2198 13.8229C16.6675 13.8229 16.2198 13.3752 16.2198 12.8229V10.8856L13 12.6003L13.0001 22.3797Z"
        fill={color || "#000"}
      />
      <path
        d="M20.9606 6.09481C20.9499 6.08311 20.9391 6.07147 20.9282 6.05989C20.4881 5.59137 19.9021 5.26749 19.1174 4.83377L14.8559 2.47524C14.0668 2.03793 13.4843 1.7151 12.848 1.58545C12.2889 1.47152 11.7114 1.47152 11.1522 1.58545C10.5159 1.7151 9.93339 2.03793 9.14429 2.47524L8.38704 2.8944L17.2426 8.0749L20.9606 6.09481Z"
        fill={color || "#000"}
      />
    </g>{" "}
    <path
      d="M2.10673 7.86426C1.99917 8.37577 1.99957 8.9398 2.00007 9.63524V14.3653C1.99945 15.2295 1.99898 15.8907 2.20565 16.5005C2.38727 17.0363 2.68334 17.5265 3.07203 17.9404C3.5121 18.4089 4.09813 18.7328 4.88291 19.1665L9.14432 21.525C9.87013 21.9273 10.4212 22.2326 11.0001 22.3799L11.0001 12.6006L2.10673 7.86426Z"
      fill={color || "#000"}
    />
  </Svg>
);

export default Pipackage02duosolid;
