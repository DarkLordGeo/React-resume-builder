import { Link } from "react-router-dom"

function ErrorPageComponent(){
    return (
        <>
        <div className='flex items-center justify-center h-screen text-white bg-dark-bg'>
            Not Found 404
            <Link to="/"> Go back to home link</Link>
        </div>
        </>
    )
}
export default ErrorPageComponent