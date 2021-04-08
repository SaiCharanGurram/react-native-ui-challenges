import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 469.333 469.333"
      {...props}>
      <Path d="M412.917 338.177C400.708 319.958 384 295.01 384 224v-32c0-67.512-45.066-124.63-106.667-143.043v-6.29C277.333 19.135 258.188 0 234.667 0S192 19.135 192 42.667v6.29C130.401 67.37 85.333 124.488 85.333 192v32c0 71.01-16.708 95.958-28.917 114.177-7.063 10.552-13.75 20.521-13.75 35.156 0 34.775 72.495 46.978 131.271 51.181 8.241 26.383 32.432 44.819 60.729 44.819s52.488-18.436 60.729-44.819c58.776-4.203 131.271-16.406 131.271-51.181.001-14.635-6.687-24.604-13.749-35.156zM213.333 42.667c0-11.76 9.563-21.333 21.333-21.333S256 30.906 256 42.667v1.704c-6.987-1.006-14.072-1.704-21.333-1.704s-14.346.698-21.333 1.704v-1.704zM234.667 448c-15.944 0-29.947-8.799-37.221-22.147 15.115.638 28.24.814 37.221.814 8.983 0 22.107-.176 37.223-.814C264.615 439.201 250.611 448 234.667 448zm0-42.667c-97.688 0-170.667-16.896-170.667-32 0-7.802 3.292-13.063 10.146-23.281C87.083 330.719 106.667 301.5 106.667 224v-32c0-70.583 57.417-128 128-128s128 57.417 128 128v32c0 77.5 19.583 106.719 32.521 126.052 6.854 10.219 10.146 15.479 10.146 23.281-.001 15.105-72.98 32-170.667 32z" />
    </Svg>
  );
}

export default SvgComponent;