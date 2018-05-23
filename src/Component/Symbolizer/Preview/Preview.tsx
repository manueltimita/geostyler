import * as React from 'react';

// default props
interface DefaultPreviewProps {}
// non default props
interface PreviewProps extends Partial<DefaultPreviewProps> {}

/**
 * Symbolizer preview UI.
 */
class Preview extends React.Component<PreviewProps, any> {

  render() {

    return (
      <div className="gs-symbolizer-preview" >
        TODO Preview 
      </div>
    );
  }
}

export default Preview;