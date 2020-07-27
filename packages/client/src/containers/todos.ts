import { createContainer } from 'unstated-next'

import useTodos from '@hooks/useTodos'

const TodosContainer = createContainer(useTodos)

export default TodosContainer
