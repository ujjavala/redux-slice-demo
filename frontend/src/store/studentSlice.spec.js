import '@testing-library/jest-dom'
import cryptoJs from 'crypto-js'
import mfaSlice, { errorOccured, loadingFinished, loadingStarted, mfaFetched, mfaToggled, successOccured } from './mfaSlice'

let state = {
  isMfaOpted: false,
  isLoading: true,
  isFetchMfaDetailsError: false,
  subjects: {
    sms: {
      enrolled: '0000 0000 000'
    },
    push: {
      enrolled: 'Test iPhone'
    }
  }
}

const hash = function (string) {
  const hashHex = cryptoJs.SHA3(string).toString(cryptoJs.enc.Hex)
  return hashHex;
}

xdescribe('mfaSlice', () => {
  it('initialize slice with initialValue', () => {
    const mfaSliceInit = mfaSlice(state, { type: 'unknown' })
    expect(mfaSliceInit).toBe(state)
  })

  it('test mfaFetched', () => {
    const prev = {
      id: hash('user'),
      num: hash('1234567890'),
      mfa: true
    }
    window.sessionStorage.setItem('details', JSON.stringify(prev))
    let testData = {
      user_id: 'user',
      flag: true,
      subjects: [
        {
          id: 'sms|dev_qI1PC5clxz285fIq',
          authenticator_type: 'oob',
          active: true,
          oob_channel: 'sms',
          name: 'XXXXXXXXX9351'
        }
      ]
    }

    const afterReducerOperation = mfaSlice(state, mfaFetched(testData))

    expect(afterReducerOperation.isMfaOpted).toBe(true)
    expect(afterReducerOperation.subjects).toStrictEqual({
      push: {
        enrolled: undefined
      },
      sms: {
        enrolled: 'XXXXXXXXX9351'
      }
    })
  })

  it('test mfaToggled', () => {
    const afterReducerOperation = mfaSlice(state, mfaToggled(true))
    expect(afterReducerOperation.isMfaOpted).toStrictEqual(true)
  })

  it('test loadingStarted', () => {
    const afterReducerOperation = mfaSlice(state, loadingStarted())
    expect(afterReducerOperation.isLoading).toBe(true)
  })

  it('test loadingFinished', () => {
    const afterReducerOperation = mfaSlice(state, loadingFinished())
    expect(afterReducerOperation.isLoading).toBe(false)
  })

  it('test errorOccured on fetchMfadetails', () => {
    const afterReducerOperation = mfaSlice(state, errorOccured('fetchMfadetails'))
    expect(afterReducerOperation.isFetchMfaDetailsError).toBe(true)
  })

  it('test successOccured on fetchMfadetails', () => {
    const afterReducerOperation = mfaSlice(state, successOccured('fetchMfadetails'))
    expect(afterReducerOperation.isFetchMfaDetailsError).toBe(false)
  })

  it('test errorOccured on toggleMfa', () => {
    const afterReducerOperation = mfaSlice(state, errorOccured('toggleMfa'))
    expect(afterReducerOperation.isToggleMfaError).toBe(true)
  })

  it('test successOccured on toggleMfa', () => {
    const afterReducerOperation = mfaSlice(state, successOccured('toggleMfa'))
    expect(afterReducerOperation.isToggleMfaError).toBe(false)
  })

  it('test session mobile number against fetched number when push is enrolled and number is deleted', () => {
    const prev = {
      id: hash('user'),
      num: hash('1234567890'),
      mfa: true
    }

    window.sessionStorage.setItem('details', JSON.stringify(prev))

    const getItemSpy = jest.spyOn(Object.getPrototypeOf(sessionStorage), 'getItem')
    let updatedState = {
      userId: 'user',
      notification: [],
      isMfaOpted: true,
      isLoading: true,
      subjects: {
        sms: {
          enrolled: '0000 0000 000'
        },
        push: {
          enrolled: 'Test iPhone'
        }
      }
    }
    let testData = {
      user_id: 'user',
      flag: true,
      subjects: [
        {
          id: 'push|dev_qI1PC5clxz285fIq',
          authenticator_type: 'oob',
          active: true,
          oob_channel: 'sms',
          name: 'XXXXXXXXX9351'
        }
      ]
    }
    const afterReducerOperation = mfaSlice(updatedState, mfaFetched(testData))
    expect(getItemSpy).toHaveBeenCalled()
    expect(afterReducerOperation.notification[0]).toStrictEqual({
      eventTitle: 'Your mobile number has been deleted.',
      eventMessage: 'We\'ll no longer send you a text message for multi-factor authentication',
      eventType: 'success'
    })
    window.sessionStorage.clear()
  })

  it('test session mobile number against fetched number when sms is the only factor and it is deleted', () => {
    const prev = {
      id: hash('user'),
      num: hash('1234567890'),
      mfa: true
    }

    window.sessionStorage.setItem('details', JSON.stringify(prev))

    const getItemSpy = jest.spyOn(Object.getPrototypeOf(sessionStorage), 'getItem')
    let updatedState = {
      userId: 'user',
      notification: [],
      isMfaOpted: true,
      isLoading: true,
      subjects: {
        sms: {
          enrolled: '0000 0000 000'
        },
        push: {
          enrolled: ''
        }
      }
    }
    let testData = {
      user_id: 'user',
      flag: false,
      subjects: []
    }
    const afterReducerOperation = mfaSlice(updatedState, mfaFetched(testData))
    expect(getItemSpy).toHaveBeenCalled()
    expect(afterReducerOperation.notification[1]).toStrictEqual({
      eventTitle: 'Your mobile number has been deleted.',
      eventType: 'success'
    })
    expect(afterReducerOperation.notification[0]).toStrictEqual({
      eventTitle: 'Multi-factor authentication has been turned off.',
      eventType: 'warning'
    })
    window.sessionStorage.clear()
  })
})
