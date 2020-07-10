import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import './LtDkMode.module.css'

function LtDkMode() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label>
          <input 
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
            checked={theme === 'dark'}
          />{' '}
          dark mode
        </label>
      )}
    </ThemeToggler>
  )
}

export default LtDkMode;