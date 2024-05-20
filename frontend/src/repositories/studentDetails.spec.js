import '@testing-library/jest-dom';
import { fetchMfadetails, showNotification, toggleMfa } from './mfaDetails';
import axios from 'axios';

const testMfaData = {
    'flag': true,
    'subjects': [
        {
            'id': 'sms|dev_qI1PC5clxz285fIq',
            'authenticator_type': 'oob',
            'active': true,
            'oob_channel': 'sms',
            'name': 'XXXXXXXXX9351'
        },
    ]
}

jest.mock('axios');

xdescribe('mfaDetails', () => {

    it('should dispatch loadingStarted when starting to fetch mfa details', async () => {
        const mockDispatch = jest.fn();
        await fetchMfadetails()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'mfaReducer/loadingStarted'
        })
    });

    it('should dispatch mfaFetched when mfa details are fetched', async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: testMfaData,
                headers: {
                    'content-type': 'application/json'
                }
            },)
        );
        const mockDispatch = jest.fn();
        await fetchMfadetails()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith({
            payload: testMfaData,
            type: 'mfaReducer/mfaFetched'
        })
    });

    it('should dispatch errorOccured when mfa details are fetched with incorrect content type', async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                data: testMfaData,
                headers: {
                    'Content-Type': 'text/html'
                }
            },)
        );
        const mockDispatch = jest.fn();
        await fetchMfadetails()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith({
            payload: 'fetchMfadetails',
            type: 'mfaReducer/errorOccured'
        })
    });

    it('should dispatch errorOccured when fetch mfa details fails', async () => {
        axios.get.mockImplementationOnce(() =>
            Promise.reject({ statusCode: 500 })
        );
        const mockDispatch = jest.fn();
        await fetchMfadetails()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'mfaReducer/errorOccured',
            payload: 'fetchMfadetails'
        })
    });

    it('should dispatch loadingStarted when starting to toggle mfa option', async () => {
        const mockDispatch = jest.fn();
        await toggleMfa()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'mfaReducer/loadingStarted'
        })
    });

    it('should dispatch mfaToggled when mfa is toggled successfully', async () => {
        axios.post.mockImplementationOnce(() =>
            Promise.resolve({ statusCode: 200 })
        );
        const mockDispatch = jest.fn();
        await toggleMfa()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'mfaReducer/mfaToggled'
        })
    });

    it('should dispatch errorOccured when mfa toggle fails', async () => {
        axios.post.mockImplementationOnce(() =>
            Promise.reject({ statusCode: 500 })
        );
        const mockDispatch = jest.fn();
        await toggleMfa()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'mfaReducer/errorOccured',
            payload: 'toggleMfa'
        })
    });

    it('should dispatch notificationShown when notification is to be shown', async () => {
        const mockDispatch = jest.fn();
        mockDispatch.mockImplementationOnce(() => Promise.resolve())

        await showNotification()(mockDispatch)
        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'mfaReducer/notificationShown'
        })
    });
});
