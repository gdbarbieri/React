import Item from './item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
              <Item marca="Ferrari" ano_lancamento={1895}  />
              <Item marca="Fiat" ano_lancamento={1964}/>
              <Item marca="Renault" />
              <Item marca="Chevrolet" ano_lancamento={1786} />
            </ul>
        </>
    )
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

export default List 