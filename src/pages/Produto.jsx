import { ListarProdutos } from "../componentes/ListarProdutos"
import { MinhaNavBar } from "../componentes/NavBar"

function Produto() {
    return (
        <div>
            <MinhaNavBar/>
            <p><ListarProdutos/></p>
        </div>
    )
}

export { Produto }
