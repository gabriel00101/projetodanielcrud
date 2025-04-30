<<<<<<< HEAD
function Tabela({vetor}){
    return(
        <table className='table'>
=======
function Tabela(){
    return(
        <table className="table">
>>>>>>> 99bdb9decdc39d05a010fd20233aac6e6e5b9c3e
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                </tr>
<<<<<<< HEAD
            </thead>
            <tbody>
                    {
                        vetor.map((obj,indice) => (
                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.marca}</td>
                                <td><button className="btn btn-success">Selecionar</button></td>
                            </tr>
                        ))
                    }
            </tbody>
            
=======
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </thead>
>>>>>>> 99bdb9decdc39d05a010fd20233aac6e6e5b9c3e
        </table>
    )
}
export default Tabela;