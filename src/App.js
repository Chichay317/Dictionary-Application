import { useCallback, useState } from "react";
import SearchInput from "./components/Search/SearchInput";

function App() {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [word, setWord] = useState([]);
  const [wordSpelling, setWordSpelling] = useState("");

  const wordSearchHandler = useCallback(async (word) => {
    try {
      setIsLoading(true);
      setError(false);
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      const data = await response.json();
      console.log(data);
      if (data.title) {
        setIsLoading(false);
        setError(true);
      } else {
        setWord(data);
        setIsLoading(false);
      }
    } catch (err) {
      setError(true);
    }
  }, []);

  return (
    <div className="App">
      <SearchInput
        isLoading={isLoading}
        error={error}
        wordItems={word}
        onSearch={wordSearchHandler}
        wordSpelling={wordSpelling}
        setWord={setWord}
        setWordSpelling={setWordSpelling}
      />
    </div>
  );
}

export default App;
