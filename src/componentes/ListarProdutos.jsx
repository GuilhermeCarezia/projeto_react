import { useEffect, useState } from "react";
import api from "../_service/api"
import { Produto } from "../pages/Produto";

function ListarProdutos() {
    const [produtos, setProdutos] = useState([])
    async function buscarProdutos() {

        try {
            const response = await api.get("/productlistbyremark/home")
            setProdutos(response.data)
        } catch (error) {
            alert("Erro ao buscar o produto")
        }
    }
    useEffect(() => {
        buscarProdutos()
    }, [])
    
    return (
        <>
            <h1>Lista de Produtos</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {produtos.map((produto) => {
                return (
                    <div>
                        <p>{produto.title}</p>
                        <p>R$ {produto.price}</p>
                        <img width={100} src={produto.image} alt={produto.title} />
                    </div>
                )
            })}
            </div>
        </>
    )
}

export { ListarProdutos }