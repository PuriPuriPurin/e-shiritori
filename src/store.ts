import { configureStore } from '@reduxjs/toolkit';
import { useSelector as rawUseSelector, TypedUseSelectorHook } from 'react-redux';
import { slice } from './slices/demo';

export const store = configureStore({
  // 必要な slice を適宜ここに追加する。
  reducer: {
    demo: slice.reducer,
  },
});

// 型定義のおまじない (useSelector は react-redux からではなく、ここからインポートする)
type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
