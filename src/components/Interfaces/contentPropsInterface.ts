import { IGenresResponseProps } from "./genresResponsePropsInterface";
import { IMovieProps } from "./moviePropsInterface";


export interface IContentProps {
    selectedGenre: IGenresResponseProps
    movies: IMovieProps[]
}