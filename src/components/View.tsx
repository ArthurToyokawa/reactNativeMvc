// View.tsx

import React, {useEffect, useState} from 'react';
import {Button, Text} from 'react-native';
import Controller from './Controller';
import Model from './Model';

export default function View(): JSX.Element {
  const [count, setCount] = useState(0);
  const controller = new Controller();
  const model = Model.getInstance();

  const addCount = () => {
    controller.addCount();
  };

  useEffect(() => {
    const updateCount = () => {
      setCount(controller.getCount());
    };

    model.addObserver(updateCount);

    return () => {
      model.removeObserver(updateCount);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Button onPress={addCount} title="adicionar" />
      <Text>{count}</Text>
    </>
  );
}
