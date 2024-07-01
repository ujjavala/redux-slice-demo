import { render } from '@testing-library/react'
import App from './App'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('Test specs for the App component', () => {
  let store
  const mockStore = configureStore([])
  beforeEach(() => {
    store = mockStore({})
  })
  it('Should render App component', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(container).toBeDefined()
  })
})
