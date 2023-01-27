function Form() {

function cadastrarUsuario(e){
    e.preventDefault()
    console.log('Cadastrou o usuário')
}

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label html=""></label>
                    <input type= "text" placeholder="Digite o seu nome" />
                </div>
                <div>
                    <input type="password" placeholder="Digite a sua senha" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form 