import { useEffect, useState } from "react"
import { Login } from "../pages/Login"
import { Link } from "react-router-dom"


function GerenciadorLogin() {
    const [nome, setNome] = useState("")

    const [email, setEmail] = useState("")
    const [token, setToken] = useState("")

    function buscarUsuario() {
        const tokenUsuario = localStorage.getItem("token")
        const nomeUsuario = localStorage.getItem("nomeUsuario")
        const emailUsuario = localStorage.getItem("emailUsuario")

        setEmail(emailUsuario)
        setNome(nomeUsuario)
        setToken(tokenUsuario)
    }


    function sair() {
        localStorage.removeItem("token");
        localStorage.removeItem("nomeUsuario");
        localStorage.removeItem("emailUsuario");
        window.location.reload();
    }

    useEffect(() => {
        buscarUsuario();
    }, []);

    if (token) {
        return (
            <div className="text-white">
                <h2>Usuário Logado</h2>
                <p><strong>Nome:</strong> {nome}</p>
                <p><strong>Email:</strong> {email}</p>
                <button onClick={sair}>Sair</button>
            </div>
        );
    }

    return (
        <div>

            <Link to="/login">Faça o login</Link>
        </div>
    );


}

export { GerenciadorLogin };
