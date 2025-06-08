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
 * Piarrowbigdownrightsolid icon component for React Native
 * @param {Object} props - Component props
 * @param {string} [props.color='#000'] - Icon color
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.accessibilityLabel] - Accessibility label
 * @param {Object} [props.style] - Additional styles
 */
const Piarrowbigdownrightsolid = ({
  color = "#000",
  size = 24,
  accessibilityLabel = "arrow big down right icon",
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
      d="M9.04292 20.0798C8.85014 20.0508 8.67003 19.9661 8.52475 19.8361C8.37947 19.7061 8.27535 19.5365 8.2252 19.3481C8.17505 19.1598 8.18106 18.9608 8.24248 18.7758C8.3039 18.5908 8.41806 18.4278 8.57092 18.3068C9.32792 17.7068 10.0709 17.0888 10.7969 16.4538L4.50692 10.1638C4.33809 9.99976 4.17563 9.8293 4.01992 9.65278C3.84139 9.45275 3.7044 9.21922 3.61692 8.96578C3.48642 8.56412 3.48642 8.13145 3.61692 7.72978C3.71192 7.43978 3.87092 7.21878 4.01992 7.04378C4.15492 6.88378 4.32892 6.71078 4.50692 6.53178L4.52992 6.50978L6.50992 4.52978L6.53192 4.50678C6.70992 4.32878 6.88392 4.15478 7.04292 4.01978C7.21792 3.87078 7.43992 3.71178 7.72992 3.61778C8.13192 3.48678 8.56392 3.48678 8.96592 3.61778C9.25592 3.71178 9.47792 3.87078 9.65192 4.01978C9.82876 4.17549 9.99956 4.33794 10.1639 4.50678L10.1859 4.52978L16.4539 10.7968C17.0895 10.0699 17.7073 9.32765 18.3069 8.57078C18.428 8.41791 18.5911 8.30376 18.7762 8.24239C18.9613 8.18101 19.1603 8.1751 19.3487 8.22536C19.5371 8.27562 19.7067 8.37988 19.8366 8.52529C19.9665 8.6707 20.0511 8.85092 20.0799 9.04378C20.5447 12.1408 20.6059 15.285 20.2619 18.3978C20.2097 18.8743 19.9966 19.3188 19.6577 19.6579C19.3188 19.997 18.8744 20.2103 18.3979 20.2628C15.2848 20.606 12.1403 20.5444 9.04292 20.0798Z"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      stroke="none"
    />
  </Svg>
);

export default Piarrowbigdownrightsolid;
