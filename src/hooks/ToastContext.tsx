import React, { createContext } from 'react';

const ToastContext = createContext();

export const ToastProvider: React.FC = ({ children }) => {
  return <ToastContext.Provider value={{}}>{children}</ToastContext.Provider>;
};
