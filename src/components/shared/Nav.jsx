import { Link } from "react-router-dom"



function Nav(){
    return(
        <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>

            <li>
                <Link to='/user-form'>Guardar usuarios</Link>
            </li>
           

            <li>
                <Link to='/user-list'>Listar usuarios</Link>
            </li>
           
           
        </ul>
    )

}


export default Nav