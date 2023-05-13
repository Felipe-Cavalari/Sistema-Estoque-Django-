import axios from 'axios'
import { useEffect, useState } from 'react'
import Grid_Produtos from "../components/grid_produtos"
import "../styles/produtos.css"




function Produtos(){

    const [prod, setProd] = useState([])

    const getProdutos = async () => {
        const res = await axios.get('http://127.0.0.1:8000/produtos/')
        console.log(res)
        setProd(res.data)
    }

    

    useEffect(() => {
        getProdutos()
    }, [setProd])

    return(
       <div className="produtos">
            <h1>Produtos</h1>
            <Grid_Produtos produtos={prod}/>
       </div> 
    )
}

export default Produtos