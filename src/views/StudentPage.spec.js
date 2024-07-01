import '@testing-library/jest-dom';
import 'jest';
import { renderWithProviders } from '../lib/mockStoreWrapper'
import StudentPage from './StudentPage';


describe('StudentPage', () => {
    let initialState = {
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

    it('should render and match snapshot', () => {
        const { container } = renderWithProviders(<StudentPage></StudentPage>, initialState)
        expect(container).toMatchSnapshot()
    });
});