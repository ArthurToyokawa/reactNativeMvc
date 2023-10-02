import React from 'react';
import {Button, Text} from 'react-native';
import Controller from './Controller';

export default function View(): JSX.Element {
  const controller = new Controller();
  const addCount = () => {
    controller.addCount();
  };
  const getCount = () => {
    return controller.getCount();
  };

  return (
    <>
      <Button onPress={() => addCount()} title="adicionar" />
      <Text>{getCount()}</Text>
    </>
  );
}
