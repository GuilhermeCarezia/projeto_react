import { ListarProdutos } from "../componentes/ListarProdutos";
import { MinhaNavBar } from "../componentes/NavBar";

function Home() {

  return (
    <div>
      <MinhaNavBar />
      <p>HOME</p>
      <ListarProdutos/>
    </div>
  );
}

export { Home };
