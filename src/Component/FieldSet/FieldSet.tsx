import * as React from 'react';
import { Checkbox } from 'antd';

import './FieldSet.css';

// default props
interface DefaultFieldSetProps {}
// non default props
interface FieldSetProps extends Partial<DefaultFieldSetProps> {
  /** Title to be rendered on top of the FieldSet */
  title: string;
  /** Callback function for onChange of the checkbox  */
  onCheckChange?: (e: any) => void;
}

// state
interface FieldSetState {
  visible: boolean;
}

/**
 * A container for grouping sets of fields similar to a HTML fieldset element.
 * A title and a checkbox will be rendered on the top border of the component.
 */
class FieldSet extends React.Component<FieldSetProps, FieldSetState> {

  constructor(props: FieldSetProps) {
    super(props);

    this.state = {
      visible: true
    };
  }

  /**
   * Toggles the state according to the checkbox check state.
   */
  onCheckChange = (e: any) => {
    this.setState({visible: e.target.checked});

    if (this.props.onCheckChange) {
      this.props.onCheckChange(e);
    }
  }

  render() {

    const children = this.props.children;

    return (

        <fieldset className="gs-fieldset">
          <legend>
            <Checkbox
              checked={this.state.visible}
              onChange={this.onCheckChange}
            >
              {this.props.title}
            </Checkbox>
          </legend>
          {React.Children.map(children, (child, i) => {
            // Ignore all childs if checkbox is unchecked
            if (this.state.visible) {
              return child;
            }
            return undefined;
          })}
        </fieldset>

    );
  }
}

export default FieldSet;
