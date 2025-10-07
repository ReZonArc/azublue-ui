import { FormFieldFeedbackProps } from '@azublue-ui/form-field';
import { LgIdProps } from '@azublue-ui/lib';

import { NotificationProps } from '../PasswordInput/PasswordInput.types';

export interface PasswordInputFeedbackProps extends LgIdProps {
  id: string;
  hasCustomDescription: boolean;
  hasStateNotifications: boolean;
  notifications: Array<NotificationProps>;
  formFieldFeedbackProps: FormFieldFeedbackProps;
}
