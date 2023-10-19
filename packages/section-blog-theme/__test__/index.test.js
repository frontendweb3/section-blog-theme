import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a Heading', () => {
    render()
    const aboutAnchorNode = screen.getByText(/Hi, welcome 👋/i)
    expect(aboutAnchorNode).toBeInTheDocument()
  })
})