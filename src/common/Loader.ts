import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

export enum LOADING_STATE {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

type Props<T> = {
  promise: Promise<T>;
  render: (status: LOADING_STATE, results?: T) => React.ReactNode;
};

export function Loadable<T>(props: Props<T>) {
  const [loaderState, setLoaderState] = useState<LOADING_STATE>(
    LOADING_STATE.IDLE,
  );
  const [results, setResults] = useState();

  console.log(loaderState);

  useEffect(() => {
    if (loaderState !== LOADING_STATE.LOADING) {
      setLoaderState(LOADING_STATE.LOADING);
      props.promise
        .then(response => response.json())
        .then(
          (data: T) => {
            setLoaderState(LOADING_STATE.SUCCESS);
            setResults(data);
          },
          () => {
            console.log('error');
            setLoaderState(LOADING_STATE.ERROR);
          },
        );
    }
  }, [props.promise]);

  return (
    <>
      {loaderState === LOADING_STATE.IDLE && <Text>No results yet</Text>}
      {loaderState === LOADING_STATE.LOADING && (
        <View style={{flex: 1}}>
          <ActivityIndicator size="large" />
        </View>
      )}
      {loaderState === LOADING_STATE.SUCCESS && (
        <>{props.render(loaderState, results)}</>
      )}
    </>
  );
}