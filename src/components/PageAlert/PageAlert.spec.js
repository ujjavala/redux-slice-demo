import '@testing-library/jest-dom'
import 'jest'
import { render, screen } from '@testing-library/react'
import PageAlert from './PageAlert'
import React from 'react'

describe(' PageAlert', () => {
  let props = [{ message: 'eventmessage'}]

  it('should render and match event', () => {
    render(<PageAlert notification={props} />)
    expect(screen.getByText('eventmessage')).toBeInTheDocument()
  })

  it('should render empty div when no event is received', () => {
    let props = []
    const { container } = render(<PageAlert notification={props} />)
    expect(container).toMatchInlineSnapshot(`
      <div>
        <div />
      </div>
    `)
  })
})
