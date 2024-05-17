import useLoacalStorage from "./UseLocalStorage";

const ThemeChange = () => {
  const [theme, setTheme] = useLoacalStorage("theme", "dark");

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };

  return (
    <div
      className={`flex flex-col text-xl items-center w-screen h-screen ${
        theme === "light" ? "bg-gray-300" : "bg-gray-800"
      } bg-black`}
    >
      <p>{theme}</p>
      <button
        onClick={handleThemeChange}
        className={`p-5 ${
          theme === "light" ? "bg-gray-800" : "bg-gray-300"
        } rounded-full`}
      >
        Change Theme
      </button>
    </div>
  );
};

export default ThemeChange;
