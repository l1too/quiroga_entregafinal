const Search = ({ onSearch })=> {
    return (
      <form className=" w-4/5 mx-auto">
        <input type="search" name="search" id="search"
          aria-label="escriba su búsqueda"
          placeholder="Texto a buscar..."
          onChange={(e) => onSearch(e.target.value)}
        />
  
      </form>
    );
  }
  
  export default Search;