import React from 'react';
import { ModalBackground, ModalContent } from './style';

function Avatar(props) {
  console.log({ props });
  return (
    <ModalBackground>
      <ModalContent>
        <p>Hello World</p>
      </ModalContent>
    </ModalBackground>
  );
}

export default Avatar;
