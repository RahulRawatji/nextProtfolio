import { ACTIONS } from "./Calculator"

const DigitButton = ({ dispatch, digit }) => {
  return (
    <div className='border-2 border-stone-700 hover:bg-sky-200 rounded-md' onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: digit })}>{digit}</div>
  )
}

const OperationButton = ({ dispatch, operation }) => {
  return (
    <div className= "border-2 border-stone-700 hover:bg-sky-200 rounded-md" onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: operation })}>{operation}</div>
  )
};

module.exports = {
  DigitButton,
  OperationButton
};

