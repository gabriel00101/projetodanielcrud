function Formulario({botao}){
    return(
        <form>
<<<<<<< HEAD
            <h2>Sistema Gestor de Produtos</h2>
=======
            <h1>Formulario</h1>
>>>>>>> 99bdb9decdc39d05a010fd20233aac6e6e5b9c3e
            <input className="form-control" type="text" placeholder="Nome"></input>
            <input className="form-control" type="text" placeholder="Marca"></input>
            {
               botao
                ?
                <input className="btn btn-success" type="button" value="Cadastrar" />
                :
                <div>
                    <input className="btn btn-warning" type="button" value="Cancelar" />
                    <input className="btn btn-primary" type="button" value="Alterar" />
                    <input className="btn btn-danger"  type="button" value="Remover" />
                </div>
            }
        </form>
    )
}

export default Formulario;