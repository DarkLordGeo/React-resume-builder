import  PropTypes from 'prop-types'


import reactRouterDom from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom' 

function Student(props){
    return(
        <>
            <h1>Nothing</h1>
        </>
    )
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.boolean
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
    
}
export default Student