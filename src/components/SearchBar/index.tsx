import React from "react";
import { IBBResponse, ISearchBarProps } from "../../types";

import "./styles.css";

const baseUrl = "https://www.breakingbadapi.com/api/";

const SearchBar: React.FC<ISearchBarProps> = (props) => {
  const [query, setQuery] = React.useState<string>("");
  const [displayed, setDysplayed] = React.useState<IBBResponse[]>([]);

  const { onSelectedCharacter } = props;

  const handleSearch = async () => {
    if (!query || query.length < 1) return [];

    const response: Response = await fetch(`${baseUrl}characters?name=${query}`);

    if (response.status !== 200) {
      console.error("An error occurred.")
      return [];
    }

    const _characters: IBBResponse[] = await response.json();

    return _characters;
  };

  const handleClick = (character: IBBResponse) => {
    setQuery("");
    onSelectedCharacter(character);
  };

  React.useEffect(() => {
    const fetchApi = async () => {
      const results: IBBResponse[] = await handleSearch();
      setDysplayed(results);
    };

    fetchApi();
  }, [query]);

  const renderChoices = () => {
    if (!displayed || displayed.length < 1) return;

    // For production, the dangerouslySetInnerHTML can be problematic, so using a third party library to handle/parse the string before injecting it is a good call.
    return (
      <ul className="search-options">
        {displayed.map((d) => (
          <li key={d.char_id} className="search-opt" onClick={() => handleClick(d)}>
            <span dangerouslySetInnerHTML={{ __html: d.name.toUpperCase().replace(query.toUpperCase(), `<mark>${query.toUpperCase()}</mark>`) }} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="type WALTER, or WHITE, or any Breaking Bad character name..."
        value={query}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setQuery(evt.target.value.toLowerCase())}
      />
      <div>{renderChoices()}</div>
    </div>
  );
};

export default SearchBar;
