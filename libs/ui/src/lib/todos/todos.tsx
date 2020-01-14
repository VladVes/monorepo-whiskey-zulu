import React from 'react';
import { Todo } from '@monorepo-whiskey-zulu/data';

export const Todos = (props: { todos: Todo[] }) =>
  props.todos.map(t => <li className={'todo'}>{t.title} !!</li>);


export default Todos;
