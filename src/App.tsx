import React, {useLayoutEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {THEME} from './constants/theme';
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <AppNavigation />
      {isLoading && <ActivityIndicator size="large" color={THEME.INFO} />}
    </>
  );
};

export default App;
