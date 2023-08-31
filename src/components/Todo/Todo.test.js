import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Todo from './Todo'

/**
 * These are the test cases for a single TodoItem. They only test a single TodoItem and nothing else.
 * These tests ensure a TodoItem has a description and the ability to tell a parent container if the user
 * wants this TodoItem to be deleted
 */
describe('Todo test suite', () => {

  const mockDeleteTodo = jest.fn()
  beforeEach(() => {
    mockDeleteTodo.mockReset()
  })

  /*
    Builds a copy of what a TodoItem should look like in JSX
   */
  const todoBuilder = {
    build: () =>
        <Todo
            index={0}
            task={{id: 1, description: 'description'}}
            onDelete={mockDeleteTodo}
        />
  }

  it('Scenario TODO01 - Todo should display a description', () => {
    // Assemble
    render(todoBuilder.build())

    // Assert
    expect(screen.getByTestId('todoDescription')).toHaveTextContent('description')
  })

  it('Scenario TODO02 - should support ability to delete via callback to container', () => {
    // Assemble
    render(todoBuilder.build())
    const todoElement = screen.getByTestId('todoDeleteButton')

    // Action
    userEvent.click(todoElement)

    // Assert
    expect(mockDeleteTodo).toBeCalled()
  })
})