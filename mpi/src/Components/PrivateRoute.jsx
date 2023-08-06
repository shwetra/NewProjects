
import { Navigate, useNavigate } from 'react-router-dom'

const Private = ({children}) => {
    const nav = useNavigate()

    // getting data from signin for user's email verification
    const data =JSON.parse( localStorage.getItem('ak'))
    const access = data ? true : false
    if(access ){
        return children
    }
    else{
      // nav('/signup')
      <Navigate to='/'replace/>
    }
}

export default Private
