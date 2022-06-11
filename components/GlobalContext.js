import React, { useContext, createContext, useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CounterContext = createContext(0);

const useCounter = () => useContext(CounterContext);
const INITIAL_COUNT = 5;
const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(INITIAL_COUNT);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  useEffect(() => {
    if (count >= 0) {
      AsyncStorage.setItem('ARTICLE::COUNT_VALUE', `${count}`);
    }
    
  }, [count]);

  useEffect(() => {
    AsyncStorage.getItem('ARTICLE::COUNT_VALUE').then((value) => {
      if (value) {
        setCount(parseInt(value));
      }
    });
  }, []);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export {CounterContextProvider,useCounter};