import React, { useState } from 'react';

// Define a type for props
type Props = {
  animal: string;
} & typeof defaultProps;

// Define default props
const defaultProps = Object.freeze({
  quantity: 0,
});

// Define initialState (not used in this example)
// const initialState = Object.freeze({});

export const PetStore = (props: Props) => {
  const { animal, quantity } = props;
  const [currentQuantity, updateQuantity] = useState(quantity);

  // Ternary operator checks if currentQuantity is 0 & stops it from going negative
  const onDecrement = () => updateQuantity(currentQuantity === 0 ? 0 : currentQuantity - 1);
  const onIncrement = () => updateQuantity(currentQuantity + 1);

  return (
    <div>
      <div>
        There are {currentQuantity} {animal}.
      </div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

// Assigns default props to our Component
PetStore.defaultProps = defaultProps;

export default PetStore;
