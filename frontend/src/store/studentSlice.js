import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  studentName: '',
  studentId: '',
  notification: [],
  isLoading: false,
  isFetchError: false,
  isToggleError: false,
  isFlagOpted: false,
  subjects: {
    stem: {
      specialization: ''
    },
    nonStem: {
      specialization: ''
    }
  },
}

// Slice

export const slice = createSlice({
  name: 'studentReducer',
  initialState: initialState,
  reducers: {
    // Give case reducers meaningful past-tense "event"-style names

    detailsFetched(state, action) {
      const subjects = action.payload?.subjects
      const stemCourses = subjects?.find(subject => subject.id.includes('stem'))
      const nonStemCourses = subjects?.find(subject => !subject.id.includes('stem'))

      state.subjects.stem.specialization = stemCourses?.name.toString()
      state.subjects.nonStem.specialization = nonStemCourses?.name.toString()
      state.isFlagOpted = action.payload?.flag
      state.studentId = action.payload?.student_id
      state.studentName = action.payload?.student_name
    },

    flagToggled(state, action) {
      state.isFlagOpted = action.payload
    },

    notificationShown(state, action) {
      state.notification = action.payload
    },

    loadingStarted: state => {
      state.isLoading = true
    },

    loadingFinished: state => {
      state.isLoading = false
    },

    errorOccured: (state, action) => {
      if (action.payload === 'toggleFlag') { state.isToggleError = true }
      if (action.payload === 'fetchStudentDetails') { state.isFetchError = true }
    },
    successOccured: (state, action) => {
      if (action.payload === 'toggleFlag') { state.isToggleError = false }
      if (action.payload === 'fetchStudentDetails') { state.isFetchError = false }
    },
  }
})

export default slice.reducer

export const state = state => state.studentReducer

export const {
  detailsFetched: detailsFetched,
  flagToggled: flagToggled,
  loadingStarted,
  loadingFinished,
  errorOccured,
  successOccured,
  notificationShown,
} = slice.actions