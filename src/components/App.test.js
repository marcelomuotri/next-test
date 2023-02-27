import { render, fireEvent, screen } from '@testing-library/react'
import App from './App'
import { getServerSideProps } from '../utils/helpers'

/*
describe('App', () => {
  it('must render', () => {
    render(<App/>)
  })
} )
*/

describe('App component', () => {
  it('must render', () => {
    render(<App/>)
  })
});
