/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getColor } from './helper';

// If you don't like lots of icon files in your project,
// try to set generate_mode to "all-in-one" in root file "iconfont.json".
// And then regenerate icons by using cli command.
const IconLogout = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M634 337.7V188H313.5c25.2 14.7 62.7 36.5 118.5 69 16 12 30 25 30 41v470h172V553.9c0-16.6 13.4-30 30-30s30 13.4 30 30V768c0 33.1-26.9 60-60 60H462v50c0 16.5-12 30-30 30-21.3 0-175.3-68-197.4-86.6-19.4-10-32.6-30.2-32.6-53.4V188c0-33.1 26.9-60 60-60h372c33.1 0 60 26.9 60 60v149.7c0 16.6-13.4 30-30 30s-30-13.4-30-30z"
        fill={getColor(color, 0, '#333333')}
      />
      <Path
        d="M838.6 446l-30 30H571c-16.5 0-30-13.5-30-30 0-8.3 3.4-15.8 8.8-21.2 5.4-5.4 12.9-8.8 21.2-8.8h237.6l30 30z m71.7 6.6c0-0.2 0.1-0.4 0.1-0.5v-0.3c0 0.2-0.1 0.5-0.1 0.8z m0.1-12.6c0-0.2-0.1-0.4-0.1-0.5 0.1 0.3 0.1 0.5 0.2 0.8-0.1-0.2-0.1-0.2-0.1-0.3z m0.4 9.7v-0.2-0.4-0.2 0.8z m0-6.8v-0.4-0.2c0 0.3 0.1 0.5 0.1 0.8-0.1-0.1-0.1-0.1-0.1-0.2zM881 416c1 0 2 0 3 0.2-0.9-0.2-1.9-0.2-3-0.2z m30 28.8v-0.2-0.1-0.3c0-0.4 0-0.7-0.1-1.1 0-0.3 0-0.5-0.1-0.8 0-0.4-0.1-0.7-0.1-1-0.1-0.3-0.1-0.7-0.2-1 0-0.3-0.1-0.5-0.2-0.8v-0.1c0-0.2-0.1-0.5-0.2-0.7v-0.2c-0.1-0.5-0.2-0.9-0.4-1.3-0.1-0.2-0.1-0.5-0.2-0.7-1.4-4.3-3.8-8.3-7.2-11.6-0.4-0.4-0.8-0.8-1.3-1.2L796.2 318.8c-11.7-11.7-30.8-11.7-42.4 0-5.8 5.8-8.8 13.5-8.8 21.2 0 7.7 2.9 15.4 8.8 21.2l54.8 54.8 30 30-30 30-54.8 54.8c-5.8 5.8-8.8 13.5-8.8 21.2 0 7.7 2.9 15.4 8.8 21.2 11.7 11.7 30.8 11.7 42.4 0l106.1-106.1c3.2-3.2 5.5-6.9 6.9-10.9 0.1-0.2 0.2-0.5 0.3-0.7 0.1-0.2 0.2-0.5 0.2-0.7 0.1-0.2 0.1-0.3 0.2-0.5 0.1-0.3 0.2-0.5 0.2-0.8v-0.1c0.1-0.2 0.1-0.5 0.2-0.8v-0.1c0.1-0.3 0.1-0.6 0.2-0.8 0.1-0.3 0.1-0.7 0.2-1 0-0.3 0.1-0.7 0.1-1 0-0.3 0.1-0.5 0.1-0.8 0-0.4 0.1-0.7 0.1-1.1V447.5v-0.1-0.2-1.3-1.1z m-0.6-4.8c0-0.2-0.1-0.4-0.1-0.5 0.1 0.3 0.1 0.5 0.2 0.8-0.1-0.2-0.1-0.2-0.1-0.3z m0.4 2.9v-0.4c0-0.4-0.1-0.8-0.2-1.3 0 0.3 0.1 0.7 0.1 1 0 0.3 0.1 0.5 0.1 0.8v-0.1z m-1.6 13.4c-1.4 4-3.7 7.7-6.9 10.9l-1.3 1.3c0.4-0.4 0.8-0.8 1.3-1.2 3.4-3.4 5.8-7.4 7.2-11.7-0.2 0.2-0.2 0.5-0.3 0.7z m1.1-3.7c0-0.2 0.1-0.4 0.1-0.5v-0.3c0 0.2-0.1 0.5-0.1 0.8z m0.5-2.9c0 0.3-0.1 0.7-0.1 1 0.1-0.4 0.1-0.8 0.2-1.3v-0.4-0.2c-0.1 0.4-0.1 0.6-0.1 0.9z"
        fill={getColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconLogout.defaultProps = {
  size: 18,
};

export default IconLogout;
