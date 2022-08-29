// props
export interface ISearchBarProps {
  onSelectedCharacter: (character: IBBResponse) => void;
}

// models
export interface IBBResponse {
  char_id: number;
  name: string;
  appearance: number[];
  status: string;
  img?: string;
}

export {};
