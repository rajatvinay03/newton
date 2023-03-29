import React from 'react'
import UserList from '../../src/components/UserList'

describe('<UserList />', () => {
  it('renders', () => {

    cy.mount(<UserList />)
    cy.contains('Loading...').should('be.visible')
  })
})


