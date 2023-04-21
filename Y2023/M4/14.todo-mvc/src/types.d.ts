export interface todo {
  id: string
  title: string
  completed: boolean
}

type todoId = Pick<todo, 'id'>
type todoTitle = Pick<todo, 'title'>
type todoCompleted = Pick<todo, 'completed'>

export type todos = todo[]
