import React, { useReducer } from 'react';

import { DigitButton, OperationButton }  from './Button';

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: "evaluate"
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload,
          overwrite: false
        }
      }
      if (payload === "0" && state.currentOperand === "0") return state;
      if (payload === "." && state.currentOperand === ".") return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload}`
      }
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null
        }
      }
      if (state.currentOperand == null) return state
      if (state.currentOperand.length == 1) {
        return {
          ...state,
          currentOperand: null
        }
      } 

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      }
    case ACTIONS.CLEAR:
      return {}
    
    case ACTIONS.EVALUATE:
      if (state.operation == null || state.currentOperand == null || state.prevOperand == null) {
        return state
      }

      return {
        ...state,
        overwrite: true,
        prevOperand: null,
        operation: null,
        currentOperand: evaluate(state),

      }
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.prevOperand == null) {
        return state;
      }

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload 
        }
      }

      if (state.prevOperand == null) {
        return {
          ...state,
          operation: payload,
          prevOperand: state.currentOperand,
          currentOperand: null
        }
      }
      return {
        ...state,
        prevOperand: evaluate(state),
        operation: payload,
        currentOperand: null
      }
    default:
      break;
  }
};

const evaluate = ({currentOperand, prevOperand, operation}) => {
  const prev = parseFloat(prevOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = "";
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
    default:
      break;
  }
  return computation.toString();
};

const Calculator = () => {
  const [{ currentOperand, prevOperand, operation }, dispatch] = useReducer(reducer, {});

  return (
    <div>
       <h4 className='p-5 font-burtons text-center dark:text-white'>This is a Calculator i build using JSX and react hooks on a nextJS APP.</h4>
    <div className='flex justify-center'>
    <div className='bg-gradient-to-r from-teal-500 to-blue-200 p-5'>
      <div className=' bg-black my-1 rounded-md text-white mb-4'>
        <div className='h-5 text-right'>
          {prevOperand} {operation}          </div>
        <div className='h-10 text-3xl text-right'>{currentOperand}
        </div>
      </div>
      <div className='grid gap-2 grid-cols-4 text-center'>
        <div className='col-span-2 border-2 border-stone-700  hover:bg-sky-200 rounded-md' onClick={()=> dispatch({type: ACTIONS.CLEAR})}>AC</div>
        <div className='border-2  border-stone-700 hover:bg-sky-200 rounded-md' onClick={()=> dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</div>
        <OperationButton dispatch={dispatch} operation="÷"/>
        <DigitButton dispatch={dispatch} digit="1"/>
        <DigitButton dispatch={dispatch} digit="2"/>
        <DigitButton dispatch={dispatch} digit="3"/>
        <OperationButton dispatch={dispatch} operation="*"/>
        <DigitButton dispatch={dispatch} digit="4"/>
        <DigitButton dispatch={dispatch} digit="5"/>
        <DigitButton dispatch={dispatch} digit="6"/>
        <OperationButton dispatch={dispatch} operation="+"/>
        <DigitButton dispatch={dispatch} digit="7"/>
        <DigitButton dispatch={dispatch} digit="8"/>
        <DigitButton dispatch={dispatch} digit="9"/>
        <OperationButton dispatch={dispatch} operation="-"/>
        <DigitButton dispatch={dispatch} digit="0"/>
        <DigitButton dispatch={dispatch} digit="9"/>
        <div className='border-2 border-stone-700 col-span-2 hover:bg-sky-200 rounded-md' onClick={()=> dispatch({type: ACTIONS.EVALUATE})}>=</div>
      </div>
        </div>
        </div>
      </div>
  )
}

export default Calculator;