import React, { useState } from 'react';

export const Context = React.createContext(<></>);

const NavContext = ({ children } : { children: JSX.Element }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Context.Provider value={{ open, setOpen } as any}>
      { children }
    </Context.Provider>
  )
}

export default NavContext
