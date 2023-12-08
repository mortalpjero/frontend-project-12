import * as Yup from 'yup';
import i18n from 'i18next';

const { t } = i18n;

const signUpSchema = Yup.object().shape({
  username: Yup.string()
    .required(t('errors.required'))
    .min(3, t('errors.charLength'))
    .max(20, t('errors.charLength')),
  password: Yup.string()
    .required(t('errors.required'))
    .min(6, t('errors.minLength')),
  confirmPassword: Yup.string()
    .required(t('errors.required'))
    .oneOf([Yup.ref('password'), null], t('errors.matchingPasswords')),
});

export default signUpSchema;
