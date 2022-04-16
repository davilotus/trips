import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })
  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Belo Horizonte',
      slug: 'belo-horizonte',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Las Vegas',
      slug: 'las-vegas',
      location: {
        latitude: 40,
        longitude: 10
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/belo horizonte/i)).toBeInTheDocument()
    expect(screen.getByTitle(/las vegas/i)).toBeInTheDocument()
  })
})
