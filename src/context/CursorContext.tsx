import React, { createContext, useContext, useState, useCallback } from 'react';
import { CursorVariant, CursorState } from '../types';

const CursorContext = createContext<CursorState | undefined>(undefined);

export const CursorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [variant, setVariant] = useState<CursorVariant>('default');
  const [label, setLabel] = useState<string | undefined>(undefined);

  const setCursorVariant = useCallback((newVariant: CursorVariant, newLabel?: string) => {
    setVariant(newVariant);
    setLabel(newLabel);
  }, []);

  const resetCursor = useCallback(() => {
    setVariant('default');
    setLabel(undefined);
  }, []);

  return (
    <CursorContext.Provider value={{ variant, label, setCursorVariant, resetCursor }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = (): CursorState => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};
