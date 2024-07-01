
import { GENERIC_ERROR_ALERT_TITLE } from '../lib/constants'
import {
  detailsFetched,
  errorOccured,
  flagToggled,
  loadingFinished,
  loadingStarted,
  notificationShown,
  successOccured
} from '../store/studentSlice'

export const fetchStudentDetails = () => async dispatch => {
  dispatch(loadingStarted())
  try {
    const response = {
      'student_name': 'John Doe',
      'student_id': '1210310252',
      'flag': true,
      'subjects': [
        {
          'id': 'stem|101',
          'enrolled': true,
          'name': 'Engineering Maths'
        },
        {
          'id': 'arts|101',
          'enrolled': true,
          'name': 'Fine Arts'
        },
      ]
    }
    dispatch(detailsFetched(response))
    dispatch(successOccured('fetchStudentDetails'))
  } catch (e) {
    console.log('error', e)
    dispatch(errorOccured('fetchStudentDetails'))
    dispatch(showNotification([{ eventType: 'error', eventTitle: GENERIC_ERROR_ALERT_TITLE }]))
  } finally {
    dispatch(loadingFinished())
  }
}

export const toggleFlag = toggleVal => async dispatch => {
  dispatch(loadingStarted())
  try {
    if (toggleVal) dispatch(showNotification([{ message: 'Successfully opted for accomodation' }]))
    if (!toggleVal) dispatch(showNotification([{ message: 'Successfully opted out of accomodation' }]))
    dispatch(successOccured('toggleFlag'))
    dispatch(flagToggled(!toggleVal))
  } catch (e) {
    console.log('error', e)
    dispatch(errorOccured('toggleFlag'))
    dispatch(showNotification([{ message: GENERIC_ERROR_ALERT_TITLE }]))
  } finally {
    dispatch(loadingFinished())
  }
}

export const showNotification = notification => async dispatch => {
  try {
    dispatch(notificationShown(notification))
  } catch (e) {
    console.log('error', e)
  }
}
