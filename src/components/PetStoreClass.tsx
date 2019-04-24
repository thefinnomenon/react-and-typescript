import React, { Component } from 'react';

// Define a type for props
type Props = {
  animal: string;
} & typeof defaultProps;

// Define default props
const defaultProps = Object.freeze({
  quantity: 0,
});

// Define a type for the state
type State = {
  currentQuantity: number;
};

// Pass in Props & State types to the Component
export class PetStore extends Component<Props, State> {
  // Set initial state using props
  public readonly state = { currentQuantity: this.props.quantity };

  // Create handlers for button clicks
  public onDecrement = () => {
    // Stop currentQuantity from going negative
    if (this.state.currentQuantity > 0) {
      this.setState({ currentQuantity: this.state.currentQuantity - 1 });
    }
  };
  public onIncrement = () => this.setState({ currentQuantity: this.state.currentQuantity + 1 });

  public render() {
    // Grab ‘animal’ prop
    const { animal } = this.props;
    const { currentQuantity } = this.state;

    return (
      <div>
        <div>
          There are {currentQuantity} {animal}.
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }

  public static defaultProps: Readonly<{ quantity: number }>;
}

// Set the component’s defaultProps to the ones we declared above
PetStore.defaultProps = defaultProps;

// Export the component
export default PetStore;
