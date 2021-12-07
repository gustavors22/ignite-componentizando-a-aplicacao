import { IGenresResponseProps } from "./genresResponsePropsInterface";

export interface ISidebar {
    genres: IGenresResponseProps[];
    selectedGenre: number;
    handleClickButton: (id: number) => void;
}