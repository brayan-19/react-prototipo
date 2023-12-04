const Formulario = () => {
    return(
        <div className="container-form">
        <form>
        <h1>Iniciar Sesión</h1>
        <div className="form-group">
        <label>Nombre</label>
        <input type="text"/>
        </div>
        <div className="form-group">
        <label>Apellido</label>
        <input type="text"/>
        </div>
        <button type="sumbit">
            Enviar
        </button>
        </form>
        </div>
    )
}
export default Formulario;