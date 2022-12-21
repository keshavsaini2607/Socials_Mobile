import React from 'react';
import {Button} from 'native-base';

interface Props {
  title: string;
  click: () => void;
}

const CustomButton = ({title, click}: Props) => {
  return (
    <Button onPress={click} backgroundColor="purple.700">
      {title}
    </Button>
  );
};

export default CustomButton;
