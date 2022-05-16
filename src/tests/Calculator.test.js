import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })


  it ('should add 1 and 4 to equal 5', () => {
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('operator_add');
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(button1)
    fireEvent.click(buttonAdd)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('5')

  })

  it ('should subtract 4 from 7 to equal 3', () => {
    const runningTotal = container.getByTestId('running-total');
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(button7)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it ('should multiply 3 by 5 and equal 15', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(button3)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button5)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('15')
  })

  it ('should divide 21 by 7 and equal 3', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonDivide = container.getByTestId('operator-divide');
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(buttonDivide)
    fireEvent.click(button7)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it ('should concatenate multiple button number clicks', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(button7)
    expect(runningTotal.textContent).toEqual('217')
  })

  it('should check whether operators can be chained', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const buttonDivide = container.getByTestId('operator-divide');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const buttonAdd = container.getByTestId('operator_add');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(button7)
    fireEvent.click(buttonMultiply)
    fireEvent.click(button2)
    fireEvent.click(buttonDivide)
    fireEvent.click(button2)
    fireEvent.click(buttonAdd)
    fireEvent.click(button1)
    fireEvent.click(buttonSubtract)
    fireEvent.click(button7)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('1')
  })

  it('should clear the running total without affecting the calculation', () => {
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const buttonAdd = container.getByTestId('operator_add');
    const buttonEquals = container.getByTestId('operator-equals');
    const buttonClear = container.getByTestId('clear')

    fireEvent.click(button1)
    fireEvent.click(buttonAdd)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)
    fireEvent.click(buttonClear)

    expect(runningTotal.textContent).toEqual('0')
    
    fireEvent.click(buttonAdd)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)

    expect(runningTotal.textContent).toEqual('9')


  })
})

