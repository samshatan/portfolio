import { MoonStar, Sun } from "lucide-react"
import { Button } from "../components/ui/button"
import { useTheme } from "./DarkModeProvider"

export function DarkMode() {
  const {theme, setTheme} = useTheme();

  const darkTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <Button variant="link" size="sm" onClick={darkTheme}>
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
      <MoonStar className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    </Button>
  )
}