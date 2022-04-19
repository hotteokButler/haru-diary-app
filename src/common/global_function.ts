//emoji
import anger from '../images/feel_emoji/anger_f.png';
import cry from '../images/feel_emoji/cry_f.png';
import davil from '../images/feel_emoji/davil_f.png';
import excite from '../images/feel_emoji/excite_f.png';
import fun from '../images/feel_emoji/fun_f.png';
import happy from '../images/feel_emoji/happy_f.png';
import heart from '../images/feel_emoji/heart_f.png';
import injured from '../images/feel_emoji/injured_f.png';
import nice from '../images/feel_emoji/nice_f.png';
import normal from '../images/feel_emoji/normal_f.png';
import relax from '../images/feel_emoji/relax_f.png';
import sad from '../images/feel_emoji/sad_f.png';
import sick from '../images/feel_emoji/sick_f.png';
import wink from '../images/feel_emoji/wink_f.png';
import yell from '../images/feel_emoji/yell_f.png';
import defaultEmoji from '../images/feel_emoji/default_f.png';
//weather
import cloudy from '../images/weather/cloudy.svg';
import hazy from '../images/weather/hazy.svg';
import lightning from '../images/weather/lightning.svg';
import moonlight from '../images/weather/moonlight.svg';
import rainbow from '../images/weather/rainbow.svg';
import rainy from '../images/weather/rainy.svg';
import snowy from '../images/weather/snowy.svg';
import sunny from '../images/weather/sunny.svg';
import windy from '../images/weather/windy.svg';
//frame
import theme1 from '../images/theme1.png';
import theme2 from '../images/theme2.png';
import theme3 from '../images/theme3.png';
import theme4 from '../images/theme4.png';
import theme5 from '../images/theme5.png';
import theme6 from '../images/theme6.png';
import defaultFrame from '../images/theme0.png';
//tape
import tape1 from '../images/tape1.png';
import tape2 from '../images/tape2.png';
import tape3 from '../images/tape3.png';
import tape4 from '../images/tape4.png';
import tape5 from '../images/tape5.png';
import tape6 from '../images/tape6.png';
import tape7 from '../images/tape7.png';
import tape8 from '../images/tape8.png';
import tape9 from '../images/tape9.png';
import tape10 from '../images/tape10.png';
import tape11 from '../images/tape11.png';
import tape12 from '../images/tape12.png';

//emoji
export const checkFeelingIcon = (feel?: string): string | undefined => {
  switch (feel) {
    case 'anger':
      return anger;
    case 'cry':
      return cry;
    case 'davil':
      return davil;
    case 'excite':
      return excite;
    case 'fun':
      return fun;
    case 'happy':
      return happy;
    case 'heart':
      return heart;
    case 'injured':
      return injured;
    case 'nice':
      return nice;
    case 'normal':
      return normal;
    case 'relax':
      return relax;
    case 'sad':
      return sad;
    case 'sick':
      return sick;
    case 'wink':
      return wink;
    case 'yell':
      return yell;
    default:
      return defaultEmoji;
  }
};

//weather
export const checkWeatherIcon = (weather?: string | undefined): string => {
  switch (weather) {
    case 'sunny':
      return sunny;
    case 'cloudy':
      return cloudy;
    case 'hazy':
      return hazy;
    case 'lightning':
      return lightning;
    case 'moonlight':
      return moonlight;
    case 'rainbow':
      return rainbow;
    case 'rainy':
      return rainy;
    case 'snowy':
      return snowy;
    case 'windy':
      return windy;
    default:
      return rainbow;
  }
};

//
export const checkPhotoFrame = (frame?: string | undefined): string => {
  switch (frame) {
    case 'theme1':
      return theme1;
    case 'theme2':
      return theme2;
    case 'theme3':
      return theme3;
    case 'theme4':
      return theme4;
    case 'theme5':
      return theme5;
    case 'theme6':
      return theme6;
    default:
      return defaultFrame;
  }
};
//Tape

export const checkMakingTape = (tape?: string): string | undefined => {
  switch (tape) {
    case 'tape1':
      return tape1;
    case 'tape2':
      return tape2;
    case 'tape3':
      return tape3;
    case 'tape4':
      return tape4;
    case 'tape5':
      return tape5;
    case 'tape6':
      return tape6;
    case 'tape7':
      return tape7;
    case 'tape8':
      return tape8;
    case 'tape9':
      return tape9;
    case 'tape10':
      return tape10;
    case 'tape11':
      return tape11;
    case 'tape12':
      return tape12;

    default:
      return tape12;
  }
};
