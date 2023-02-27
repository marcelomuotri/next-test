import { render, fireEvent } from '@testing-library/react'
import CardLayOut from './CardLayOut'

const mockData = [
  { id: 1, name: 'repo1', html_url:'www.google.com', owner: { avatar_url: 'https://github.com/PokemonGoF/PokemonGo-Bot'}, topics: [1,2,3] },
  { id: 2, name: 'repo2', html_url:'www.google.com', owner: { avatar_url: 'https://github.com/PokemonGoF/PokemonGo-Bot'}, topics: [1,2,3] },
  { id: 3, name: 'repo3', html_url:'www.google.com', owner: { avatar_url: 'https://github.com/PokemonGoF/PokemonGo-Bot'}, topics: [1,2,3] },
]

const mockCallData = jest.fn()

describe('CardLayOut', () => {
  it('should render with data', () => {
    render(<CardLayOut data={mockData} />)
  })
})