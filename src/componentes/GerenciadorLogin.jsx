import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { CheckCircle } from "lucide-react";


function GerenciadorLogin() {
    const [nome, setNome] = useState("")

    const [email, setEmail] = useState("")
    const [token, setToken] = useState("")
    const navigate = useNavigate()

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
            <div className="text-white flex items-center gap-4">
                <p>
                    <strong>Nome:</strong> {nome}
                </p>
                <div className="flex items-center gap-2">
                    <CheckCircle className="text-green-500 w-5 h-5" />
                    <span>Usuário Logado</span>
                </div>
                <button onClick={sair} className="bg-red-600 px-3 py-1 rounded-lg hover:bg-red-700 transition">Sair</button>
            </div>
        );
    }

    return (
        <div>
            <button onClick={() => navigate("/login")} className="bg-red-600 px-3 py-1 rounded-lg hover:bg-red-700 transition">Login</button>
        </div>
    );


}

export { GerenciadorLogin };
