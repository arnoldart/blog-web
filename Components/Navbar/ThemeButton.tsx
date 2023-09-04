import React, { useCallback, useState } from 'react'
import styles from '~/Components/Navbar/ThemeButton.module.scss'
import { setTheme } from '~/store/slices/ThemeSclices'
import { useAppDispatch, useAppSelector } from '~/store/store'

interface ListThemesProps {
  themes: string[];
  onThemeChange: (theme: string) => void;
}

const ListTheme: React.FC<ListThemesProps> = ({
  themes,
  onThemeChange
}) => {

  return (
    <div className={styles.list_theme}>
      <div className={styles.button_theme}>
        <ul>
          {themes.map((theme: string) => (
            <li
              key={theme}
              onClick={() => onThemeChange(theme)}
            >
              {theme}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const ThemeButton = () => {
  const [isActive, setActive] = useState(false)
  const click = () => setActive(!isActive)

  const currentTheme = useAppSelector((state) => state.theme.theme)
  const dispatch = useAppDispatch()

  const themes = ['light', 'dark']
  const availableTheme = themes.filter((theme) => theme !== currentTheme)

  const handleThemeChange = useCallback(
    (theme: string) => {
      dispatch(setTheme(theme));
    },
    [dispatch]
  );

  return (
    <div className={styles.container} onClick={click}>
      <div className={styles.button_theme}>
        <p className={styles.text_theme}>{currentTheme}</p>
      </div>
      <div 
        style={{
          position: "absolute"
        }}
      >
        {isActive && <ListTheme themes={availableTheme} onThemeChange={handleThemeChange} />}
      </div>
    </div>
  )
}

export default ThemeButton