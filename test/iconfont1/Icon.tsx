/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';


export type IconNames = 'wechat' | 'alipay' | 'baidu' | 'logout' | 'user';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

// If you don't want to make all icons in one file,
// try to set generate_mode to "depends-on" in root file "iconfont.json".
// And then regenerate icons by using cli command.
const Icon: FunctionComponent<Props> = ({ color, name, size, ...rest }) => {
  switch (name) {
    case 'wechat':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M579.598841 511.554783A24.635362 24.635362 0 0 0 556.521739 535.744928a24.264348 24.264348 0 0 0 23.373913 21.667246c17.511884 0 29.681159-10.833623 29.68116-21.667246 0-13.356522-12.54029-24.190145-29.68116-24.190145zM502.798841 398.988986a27.826087 27.826087 0 0 0 29.681159-29.16174 27.38087 27.38087 0 0 0-29.681159-29.161739c-17.511884 0-34.207536 10.833623-34.207537 29.161739s16.695652 29.161739 34.207537 29.16174zM512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0zM415.536232 641.706667a275.812174 275.812174 0 0 1-82.587826-13.356522l-84.591305 42.592464 24.190145-71.754203C213.333333 557.486377 178.086957 504.57971 178.086957 440.691014c0-113.456232 106.777971-200.347826 236.929855-200.347826 115.088696 0 217.711304 68.415072 237.449275 165.175653a115.533913 115.533913 0 0 0-22.26087-2.522899c-113.456232 0-201.015652 85.110725-201.015652 187.65913a201.089855 201.089855 0 0 0 6.678261 50.086957 175.044638 175.044638 0 0 1-20.851014 0.816232z m347.863188 81.623188l16.695652 60.030145-63.369275-35.84c-24.190145 4.971594-47.564058 12.54029-71.754203 12.54029-111.749565 0-200.347826-76.725797-200.347826-171.853913s88.449855-171.853913 200.347826-171.853913c105.590725 0.148406 200.941449 76.874203 200.941449 172.002319 0 53.351884-35.84 100.915942-82.587826 135.123478zM337.623188 340.591304c-17.511884 0-35.84 10.833623-35.84 29.161739s18.328116 29.235942 35.84 29.235943a28.716522 28.716522 0 0 0 29.68116-29.235943 28.197101 28.197101 0 0 0-29.68116-29.161739z m372.869566 170.666667a24.041739 24.041739 0 0 0-23.373913 24.190145 23.596522 23.596522 0 0 0 23.373913 21.667246c16.695652 0 29.161739-10.833623 29.161739-21.667246 0-13.356522-12.54029-24.190145-29.161739-24.190145z m0 0"
            fill={color ? typeof color === 'string' && color || color[0] || '#19D100' : '#19D100'}
          />
        </Svg>
      );
    case 'alipay':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M192 692.736c0-69.632 51.2-106.496 88.064-111.104 111.104-18.432 264.192 74.24 264.192 74.24-69.632 88.064-166.912 134.144-241.152 134.144-65.024-4.608-111.104-41.472-111.104-97.28z"
            fill={color ? typeof color === 'string' && color || color[0] || '#5B8BD4' : '#5B8BD4'}
          />
          <Path
            d="M979.456 729.6c-13.824-4.608-329.216-101.888-319.488-111.104 46.592-55.808 78.848-185.344 78.848-185.344v-27.648h-185.344V335.872h226.816v-41.472h-226.816V192.512H460.8v97.28H257.024v41.472H460.8v69.632H298.496v27.648h333.824c0 13.824-23.04 106.496-46.08 148.48-4.608-9.216-153.088-60.416-236.544-65.024-88.064 4.608-157.696 32.256-189.952 97.28-46.592 120.32 27.648 241.152 194.56 241.152 27.648 0 162.304-13.824 264.192-153.088 27.648 13.824 185.344 92.672 282.624 143.872-92.672 111.104-231.936 180.736-389.12 180.736-280.576 1.024-508.928-226.304-509.44-506.88v-3.072C1.024 231.424 227.84 3.072 508.928 2.56h3.072c280.576-1.024 508.928 226.304 509.44 506.88v3.072c4.608 82.944-13.824 152.576-41.984 217.088z"
            fill={color ? typeof color === 'string' && color || color[1] || '#5B8BD4' : '#5B8BD4'}
          />
        </Svg>
      );
    case 'baidu':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M555.9 242h30.4v189h-30.4V242z m-118.1 0h30.4v189h-30.4V242z m91.1 189h-30.4V242h30.4v189zM782 515.4c0 138.4-97.9 239.6-226.1 263.3V566c33.8-13.5 60.8-50.6 60.8-91.1V242H782v273.4zM244.9 242h165.4v232.9c0 40.5 27 77.6 60.8 91.1v212.6C342.8 755 244.9 653.8 244.9 515.4V242zM922 742V282c0-99-81-180-180-180H282c-99 0-180 81-180 180v460c0 99 81 180 180 180h460c99 0 180-81 180-180z"
            fill={color ? typeof color === 'string' && color || color[0] || '#333333' : '#333333'}
          />
        </Svg>
      );
    case 'logout':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M634 337.7V188H313.5c25.2 14.7 62.7 36.5 118.5 69 16 12 30 25 30 41v470h172V553.9c0-16.6 13.4-30 30-30s30 13.4 30 30V768c0 33.1-26.9 60-60 60H462v50c0 16.5-12 30-30 30-21.3 0-175.3-68-197.4-86.6-19.4-10-32.6-30.2-32.6-53.4V188c0-33.1 26.9-60 60-60h372c33.1 0 60 26.9 60 60v149.7c0 16.6-13.4 30-30 30s-30-13.4-30-30z"
            fill={color ? typeof color === 'string' && color || color[0] || '#333333' : '#333333'}
          />
          <Path
            d="M838.6 446l-30 30H571c-16.5 0-30-13.5-30-30 0-8.3 3.4-15.8 8.8-21.2 5.4-5.4 12.9-8.8 21.2-8.8h237.6l30 30z m71.7 6.6c0-0.2 0.1-0.4 0.1-0.5v-0.3c0 0.2-0.1 0.5-0.1 0.8z m0.1-12.6c0-0.2-0.1-0.4-0.1-0.5 0.1 0.3 0.1 0.5 0.2 0.8-0.1-0.2-0.1-0.2-0.1-0.3z m0.4 9.7v-0.2-0.4-0.2 0.8z m0-6.8v-0.4-0.2c0 0.3 0.1 0.5 0.1 0.8-0.1-0.1-0.1-0.1-0.1-0.2zM881 416c1 0 2 0 3 0.2-0.9-0.2-1.9-0.2-3-0.2z m30 28.8v-0.2-0.1-0.3c0-0.4 0-0.7-0.1-1.1 0-0.3 0-0.5-0.1-0.8 0-0.4-0.1-0.7-0.1-1-0.1-0.3-0.1-0.7-0.2-1 0-0.3-0.1-0.5-0.2-0.8v-0.1c0-0.2-0.1-0.5-0.2-0.7v-0.2c-0.1-0.5-0.2-0.9-0.4-1.3-0.1-0.2-0.1-0.5-0.2-0.7-1.4-4.3-3.8-8.3-7.2-11.6-0.4-0.4-0.8-0.8-1.3-1.2L796.2 318.8c-11.7-11.7-30.8-11.7-42.4 0-5.8 5.8-8.8 13.5-8.8 21.2 0 7.7 2.9 15.4 8.8 21.2l54.8 54.8 30 30-30 30-54.8 54.8c-5.8 5.8-8.8 13.5-8.8 21.2 0 7.7 2.9 15.4 8.8 21.2 11.7 11.7 30.8 11.7 42.4 0l106.1-106.1c3.2-3.2 5.5-6.9 6.9-10.9 0.1-0.2 0.2-0.5 0.3-0.7 0.1-0.2 0.2-0.5 0.2-0.7 0.1-0.2 0.1-0.3 0.2-0.5 0.1-0.3 0.2-0.5 0.2-0.8v-0.1c0.1-0.2 0.1-0.5 0.2-0.8v-0.1c0.1-0.3 0.1-0.6 0.2-0.8 0.1-0.3 0.1-0.7 0.2-1 0-0.3 0.1-0.7 0.1-1 0-0.3 0.1-0.5 0.1-0.8 0-0.4 0.1-0.7 0.1-1.1V447.5v-0.1-0.2-1.3-1.1z m-0.6-4.8c0-0.2-0.1-0.4-0.1-0.5 0.1 0.3 0.1 0.5 0.2 0.8-0.1-0.2-0.1-0.2-0.1-0.3z m0.4 2.9v-0.4c0-0.4-0.1-0.8-0.2-1.3 0 0.3 0.1 0.7 0.1 1 0 0.3 0.1 0.5 0.1 0.8v-0.1z m-1.6 13.4c-1.4 4-3.7 7.7-6.9 10.9l-1.3 1.3c0.4-0.4 0.8-0.8 1.3-1.2 3.4-3.4 5.8-7.4 7.2-11.7-0.2 0.2-0.2 0.5-0.3 0.7z m1.1-3.7c0-0.2 0.1-0.4 0.1-0.5v-0.3c0 0.2-0.1 0.5-0.1 0.8z m0.5-2.9c0 0.3-0.1 0.7-0.1 1 0.1-0.4 0.1-0.8 0.2-1.3v-0.4-0.2c-0.1 0.4-0.1 0.6-0.1 0.9z"
            fill={color ? typeof color === 'string' && color || color[1] || '#333333' : '#333333'}
          />
        </Svg>
      );
    case 'user':
      return (
        <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
          <Path
            d="M518.07603918 6.737455c-174.95658274 0-316.73174462 141.77516188-316.73174465 316.73174464 0 82.95355218 32.42729765 159.11999552 84.46179858 214.92511241 16.59071043 18.09895683 35.44379047 33.93554407 55.80511691 47.5097617 50.5262545 33.93554407 111.61023382 53.54274731 176.46482916 53.5427473s126.69269785-19.60720323 176.46482915-53.5427473c20.36132644-13.57421762 39.21440646-29.41080486 55.80511691-47.5097617C803.13460934 482.58919514 834.80778381 406.42275179 834.80778381 323.46919964c0-174.95658274-141.77516188-316.73174462-316.73174463-316.73174464z m166.66122752 501.491929c-22.62369604 20.36132644-49.01800811 36.95203687-77.67468975 47.50976169-27.90255844 10.55772482-58.06748652 16.59071043-88.98653777 16.59071044s-61.83810252-6.03298562-88.98653779-16.59071044c-28.65668166-11.31184801-55.0509937-27.14843525-77.67468975-47.50976169C300.88855716 462.98199189 269.21538268 396.61915017 269.21538268 323.46919964c0-137.25042267 111.61023382-248.86065649 248.8606565-248.86065651s248.86065649 111.61023382 248.86065648 248.86065651c0 73.14995053-31.67317446 139.51279228-82.19942896 184.76018436z"
            fill={color ? typeof color === 'string' && color || color[0] || '#263238' : '#263238'}
          />
          <Path
            d="M341.61121002 586.65819695C205.11491054 652.26691548 110.84951037 791.77970775 110.84951037 953.16207287c0 18.85308003-15.08246403 33.93554407-33.93554406 33.93554407s-33.93554407-15.08246403-33.93554409-33.93554407c0-177.97307556 98.03601619-332.56833185 242.82767089-414.76776082 16.59071043 18.09895683 35.44379047 33.93554407 55.80511691 48.2638849zM993.17365612 953.16207287c0 18.85308003-15.08246403 33.93554407-33.93554408 33.93554407s-33.93554407-15.08246403-33.93554405-33.93554407c0-161.38236511-94.26540019-300.8951574-230.76169966-366.50387592 20.36132644-13.57421762 39.21440646-29.41080486 55.80511691-47.5097617 144.79165469 81.44530576 242.82767087 236.04056206 242.82767088 414.01363762z"
            fill={color ? typeof color === 'string' && color || color[1] || '#15BBDF' : '#15BBDF'}
          />
        </Svg>
      );

  }

  return null;
};

Icon.defaultProps = {
  size: 18,
};

export default Icon;

/* eslint-enable */
/* tslint:enable */
