import axios from 'axios'

import { GENERIC_ERROR_ALERT_TITLE } from '../lib/constants'
import {
  errorOccured,
  loadingFinished,
  loadingStarted,
  detailsFetched,
  flagToggled,
  notificationShown,
  successOccured
} from '../store/studentSlice'

export const fetchStudentDetails = () => async dispatch => {
  dispatch(loadingStarted())
  try {
    const response = {
      'student_name': 'Spider Man',
      'student_id': '1210310252',
      'flag': true,
      'subjects': [
        {
          'id': 'stem|101',
          'authenticator_type': 'maths',
          'enrolled': true,
          'oob_channel': 'maths',
          'name': 'Engineering Maths'
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

    dispatch(successOccured('toggleFlag'))
    dispatch(flagToggled(toggleVal))
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
