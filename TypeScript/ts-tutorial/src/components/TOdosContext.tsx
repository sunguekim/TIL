import { type } from 'os';
import {createContext,Dispatch} from 'react';

export type Todo={
    id:number;
    text:string;
    done:boolean;
}

type TodosState = Todo[]

const TodosStateContext =createContext<TodosState|undefined>(undefined);

type Action = 
|{type:'CREATE';text:string}
|{type:'TOGGLE';id:number}
|{type:'REMOVE';id:number};

type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch|undefined>(undefined);