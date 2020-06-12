import React from 'react'; 

function Layout({ children }) { 
  return (
    <div 
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--textNormal)',
        transition: 'color 0.2s ease-out, background 0.2s ease-out',
      }}
    >
      {children}
    </div>
  )
}

export default Layout;