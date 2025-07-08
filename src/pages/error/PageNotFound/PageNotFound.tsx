import { getRandomCat } from '@/utils/constants/cats/cats'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='e-404'>
        <img src={getRandomCat()} alt="cat"/>
        <h1>404</h1>
        <h4>Nothing here :( <br/> Go <Link to="/">home</Link>?</h4>
    </div>
  )
}

export default PageNotFound