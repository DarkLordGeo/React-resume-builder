const goback = () =>{
    window.history.back()
}

function AccessLimit(){
    return (
        <>
        <div className='flex flex-col items-center justify-center h-screen gap-5 text-white bg-dark-bg'>
            <h1 className="text-4xl text-center">403 Forbidden restricted access.</h1>
            <a href="/" className="hover:underline" onClick={(e) => {e.preventDefault(); goback()}}>Go back</a>
        </div>
       
        </>
    )
}
export default AccessLimit