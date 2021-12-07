import { Button } from "./Button";
import { ISidebar } from "./Interfaces/sidebarPropsInterface";


export function SideBar({
  genres,
  selectedGenre,
  handleClickButton,
}: ISidebar) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenre === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}