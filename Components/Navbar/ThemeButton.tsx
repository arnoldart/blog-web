import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '~/Components/Navbar/ThemeButton.module.scss'
import { setTheme } from '~/store/actions'

type Theme = {
  theme: string
}

const ListTheme = () => {
  // const themeSelector = useSelector((state) => state.theme)
  const dispatch = useDispatch()

  let themeSelector = "light"

  const toggleTheme = () => {
    const newTheme = themeSelector === "light" ? "dark" : "light";
    dispatch(setTheme(newTheme))
  }

  return (
    <div className={styles.list_theme}>
      <div className={styles.button_theme}>
        <p onClick={toggleTheme}>{themeSelector}</p>
      </div>
    </div>
  )
}

const ThemeButton = () => {
  const [isActive, setActive] = useState(false)
  const click = () => setActive(!isActive)

  return (
    <div className={styles.container} onClick={click}>
      <div className={styles.button_theme}>
        <p className={styles.text_theme}>Dark</p>
      </div>
      <div 
        style={{
          position: "absolute"
        }}
      >
        {isActive && <ListTheme />}
      </div>
    </div>
  )
}

export default ThemeButton