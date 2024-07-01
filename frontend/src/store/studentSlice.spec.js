import '@testing-library/jest-dom'
import studentSlice, { errorOccured, loadingFinished, loadingStarted, detailsFetched, flagToggled, successOccured } from './studentSlice'

let state = {
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

describe('studentSlice', () => {
    it('initialize slice with initialValue', () => {
        const studentSliceInit = studentSlice(state, { type: 'unknown' })
        expect(studentSliceInit).toBe(state)
    })

    it('test detailsFetched', () => {

        let testData = {
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

        const afterReducerOperation = studentSlice(state, detailsFetched(testData))

        expect(afterReducerOperation.isFlagOpted).toBe(true)
        expect(afterReducerOperation.subjects).toStrictEqual({
            stem: {
                specialization: 'Engineering Maths'
            },
            nonStem: {
                specialization: 'Fine Arts'
            }
        })
    })

    it('test flagToggled', () => {
        const afterReducerOperation = studentSlice(state, flagToggled(true))
        expect(afterReducerOperation.isFlagOpted).toStrictEqual(true)
    })

    it('test loadingStarted', () => {
        const afterReducerOperation = studentSlice(state, loadingStarted())
        expect(afterReducerOperation.isLoading).toBe(true)
    })

    it('test loadingFinished', () => {
        const afterReducerOperation = studentSlice(state, loadingFinished())
        expect(afterReducerOperation.isLoading).toBe(false)
    })

    it('test errorOccured on fetchStudentDetails', () => {
        const afterReducerOperation = studentSlice(state, errorOccured('fetchStudentDetails'))
        expect(afterReducerOperation.isFetchError).toBe(true)
    })

    it('test successOccured on fetchStudentDetails', () => {
        const afterReducerOperation = studentSlice(state, successOccured('fetchStudentDetails'))
        expect(afterReducerOperation.isFetchError).toBe(false)
    })

    it('test errorOccured on toggleFlag', () => {
        const afterReducerOperation = studentSlice(state, errorOccured('toggleFlag'))
        expect(afterReducerOperation.isToggleError).toBe(true)
    })

    it('test successOccured on toggleFlag', () => {
        const afterReducerOperation = studentSlice(state, successOccured('toggleFlag'))
        expect(afterReducerOperation.isToggleError).toBe(false)
    })

})
