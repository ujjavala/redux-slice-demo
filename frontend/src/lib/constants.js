// toggle component
export const MFA_TOGGLE_ON_MESSAGE =
  'You\'ve turned on multi-factor authentication. You\'ll receive a notification or code each time you log in to confirm it\'s really you.'
export const MFA_TOGGLE_OFF_MESSAGE =
  'Add extra protection to your account. We\'ll send you a notification or code after you enter your password to confirm it\'s really you.'
export const MFA_TURN_ON_ALERT_TITLE = 'Multi-factor authentication has been turned on.'

export const MFA_TURN_OFF_ALERT_TITLE = 'Multi-factor authentication has been turned off.'
export const MFA_TURN_OFF_ALERT_MESSAGE = 'You\'ll no longer receive a notification or code when you log in to your MyServiceNSW Account.'

export const MFA_UPDATE_ALERT_TITLE = 'Account protection MFA status change'

export const GENERIC_ERROR_ALERT_TITLE =
  'We could not connect to multi-factor authentication. Log out of your account, wait a few minutes and try again.'
export const MFA_MOBILE_NUMBER_DELETED_DESCRIPTION = 'We\'ll no longer send you a text message for multi-factor authentication'
export const MFA_MOBILE_NUMBER_DELETED_TITLE = 'Your mobile number has been deleted.'

//Modal text
export const MODAL_OFF_TITLE = 'Are you sure you want to turn off multi-factor authentication?'
export const MODAL_OFF_DESCRIPTION =
  'You\'ll lose the extra security on your account. This means you\'ll no longer receive a notification or code when you log in.'

//SECURITY STRENGTH BAR

export const WEAK_STRENGTH_DESCRIPTION =
  'Protect your personal information from scams and cyber criminals. Turn on multi-factor authentication to increase your account security.'
export const MODERATE_STRENGHT_DESCRIPTION =
  'Set up a backup notification option so you can log in securely if your other option is not available.'
export const STRONG_STRENGTH_DESCRIPTION =
  'You\'ve completed all the steps to secure your account. We\'ll send a notification to your Service NSW app each time you log in.'

//PAGE TITLE
export const MFA_PAGE_TITLE = 'Multi-factor authentication | MyServiceNSW Account'
export const SETUP_NOTIFICATION_PAGE_TITLE = 'Set up notifications on the Service NSW app | MyServiceNSW Account'
export const UPDATE_DEVICE_PAGE_TITLE = 'How to update your device | MyServiceNSW Account'

//Breadcrum List
export const PUSH_UPDATE_BREADCRUM_LIST = [
  {
    content: 'Manage account',
    path: '/manage'
  },
  {
    content: 'Settings and security',
    path: '/manage/settings'
  },
  {
    content: 'Multi-factor authentication',
    path: '/manage/settings/multifactor'
  },
  {
    content: 'How to update your device',
    path: '/manage/settings/multifactor/push/update'
  }
]
export const PUSH_SETUP_BREADCRUM_LIST = [
  {
    content: 'Manage account',
    path: '/manage'
  },
  {
    content: 'Settings and security',
    path: '/manage/settings'
  },
  {
    content: 'Multi-factor authentication',
    path: '/manage/settings/multifactor'
  },
  {
    content: 'Set up notifications on the Service NSW app',
    path: '/manage/settings/multifactor/push/setup'
  }
]
export const MFA_PAGE_BREADCRUM_LIST = [
  {
    content: 'Manage account',
    path: '/manage'
  },
  {
    content: 'Settings and security',
    path: '/manage/settings'
  },
  {
    content: 'Multi-factor authentication',
    path: '/manage/settings/multifactor'
  }
]

//Help accordion list
export const HELP_ACCORDION_LIST = [
  {
    title: 'What is multi-factor authentication?',
    content:
      'Multi-factor authentication is a multi-step login process that requires more information than just a password. When you turn it on to log in, it adds an extra layer of security to your account in case your password is stolen.'
  },
  {
    title: 'What\'s the difference between a Service NSW app notification and a text message?',
    content:
      'The Service NSW app allows you to respond to a notification or use a secure one-time code to confirm it\'s you. Using the app protects you against SIM swap and other phone number based hacks.<br/><br/>With text message,you\'ll receive a 6-digit code to your mobile number.<br/><br/>We recommend setting up both Service NSW app notifications and text message. This means you can access your account if one option is not available (for example when you\'re travelling).'
  },
  {
    title: 'Contact us',
    content:
      'If you need help with multi-factor authentication or anything else, go to <a href=\'https://www.service.nsw.gov.au/contact-us\' target="_blank">Contact us</a>.'
  }
]
