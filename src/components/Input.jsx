const Input = ({ onAddTask })=> {
    
        const handleSubmit = (e) => {
            e.preventDefault();
            const todoForm = new FormData(e.target);
            const description = todoForm.get('description');
            onAddTask(description);
            e.target.reset();
        
          };
          return (
            <form onSubmit={handleSubmit} className=" w-4/5 mx-auto">
              <label htmlFor="description">Nueva tarea: </label>
              <input className="mb-3" type="text" name="description" id="description" placeholder="Aprender CD/CI..." required />
              <input type="submit" value="Crear" />
            </form>
          );
    
}

export default Input;