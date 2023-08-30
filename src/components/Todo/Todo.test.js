import {fireEvent, render, screen} from '@testing-library/react'
import Todo from './Todo'
describe('Todo test suite', () => {

  const mockDeleteTodo = jest.fn()
  beforeEach(() => {
    mockDeleteTodo.mockReset()
  })

  const todoBuilder = {
    build: () => <Todo index={0} task={{id: 1, description: 'description'}} onDelete={mockDeleteTodo}></Todo>
  }

  it('Scenario TODO01 - should display a description', () => {
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
    fireEvent.click(todoElement)

    // Assert
    expect(mockDeleteTodo).toBeCalled()
  })
})