import React, {createContext, useState} from 'react';

type AuthContextType = {
  isLogin: boolean;
  setIsLogin: any;
  name: string;
  setIsName: any;
  email: string;
  setIsEmail: any;
};
export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({children}: any) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [name, setIsName] = useState<string>('');
  const [email, setIsEmail] = useState<string>('');

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        setIsLogin,
        email,
        name,
        setIsEmail,
        setIsName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
