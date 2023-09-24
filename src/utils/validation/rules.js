import { string, number, date, setLocale } from 'yup';

import { isINNLegalEntity } from './functions';

import { removeNonDigit, getTodayEnd } from './../helpers';

setLocale({
  number: {
    min: ({ min }) => `Минимум от ${min}`,
    max: ({ max }) => `Максимум до ${max}`,
  },
});

export const login = string().required('Введите логин');

export const password = string().required('Введите пароль');

export const limit = number()
  .typeError('Введите корректные данные')
  .required('Введите количество')
  .min(1)
  .max(1000);

export const inn = string()
  .required('Введите ИНН компании')
  .transform(removeNonDigit)
  .test('innValid', 'Введите корректные данные', isINNLegalEntity);

export const startDate = date()
  .typeError('Введите формате (дд.мм.гггг)')
  .max(getTodayEnd(), 'Введите корректные данные')
  .required('Укажите дату начала');

export const endDate = date()
  .typeError('Введите формате (дд.мм.гггг)')
  .max(getTodayEnd(), 'Введите корректные данные')
  .required('Укажите дату конца');
