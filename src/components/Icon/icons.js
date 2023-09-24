import prevArrowSrc from '../../assets/images/prevArrow.svg';
import nextArrowSrc from '../../assets/images/nextArrow.svg';
import timerSrc from '../../assets/images/timer.svg';
import magnifierSrc from '../../assets/images/magnifier.svg';
import shieldSrc from '../../assets/images/shield.svg';

const defaultIcon = {
  src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
  alt: 'Red point',
};

export const getIcon = (icon) => {
  switch (icon) {
    case 'prev-arrow':
      return {
        src: prevArrowSrc,
        alt: 'prev arrow',
      };

    case 'next-arrow':
      return {
        src: nextArrowSrc,
        alt: 'next arrow',
      };

    case 'timer':
      return {
        src: timerSrc,
        alt: 'timer',
      };

    case 'magnifier':
      return {
        src: magnifierSrc,
        alt: 'magnifier',
      };

    case 'shield':
      return {
        src: shieldSrc,
        alt: 'shield',
      };

    default:
      return defaultIcon;
  }
};
