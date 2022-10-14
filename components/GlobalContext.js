import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const CounterContext = createContext(0);

const useCounter = () => useContext(CounterContext);
const INITIAL_COUNT = 5;
const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(INITIAL_COUNT);

  const increment = (val) => setCount((c) => c + val);
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

export { CounterContextProvider, useCounter };
