import React from 'react';

import Editable from 'react-sane-contenteditable';

import EditableStyle from './ContentEditable.module.scss';

const ContentEditable = React.memo(function ContentEditable(props) {
  return (
    <Editable
      className={EditableStyle.Editable} 
      multiLine
      {...props}
    />
  )
});

export default ContentEditable;
