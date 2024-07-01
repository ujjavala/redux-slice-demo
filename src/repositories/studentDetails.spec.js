import '@testing-library/jest-dom';
import { fetchStudentDetails, showNotification, toggleFlag } from './studentDetails';

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

describe('studentDetails', () => {

    it('should dispatch loadingStarted when starting to fetch student details', async () => {
        const mockDispatch = jest.fn();
        await fetchStudentDetails()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'studentReducer/loadingStarted'
        })
    });

    it('should dispatch detailsFetched when student details are fetched', async () => {
        const mockDispatch = jest.fn();
        await fetchStudentDetails()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith({
            payload: response,
            type: 'studentReducer/detailsFetched'
        })
    });


    it('should dispatch loadingStarted when starting to toggle student option', async () => {
        const mockDispatch = jest.fn();
        await toggleFlag()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'studentReducer/loadingStarted'
        })
    });

    it('should dispatch flagToggled when student is toggled successfully', async () => {
        const mockDispatch = jest.fn();
        await toggleFlag()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'studentReducer/flagToggled',
            payload: true
        })
    });

    it('should dispatch notificationShown when notification is to be shown', async () => {
        const mockDispatch = jest.fn();
        mockDispatch.mockImplementationOnce(() => Promise.resolve())

        await showNotification()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'studentReducer/notificationShown'
        })
    });
});
