import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({type, msg, children, show, toggle}) => {
    return (
        <div>
            {
                show &&
                <div onClick={toggle} className={`alert alert-${type}`} role="alert">
                    {msg ? msg : children}
                    
                </div>
                
            }
        </div>
        
    )
}

Alert.propTypes = {
    type : PropTypes.string.isRequired,
    msg : PropTypes.string,
    show : PropTypes.bool,
    toggle : PropTypes.func

}

Alert.defaultProps = {
    msg : null,
    show : false,
    toggle() {}
}

const withAnimation = (Component) => {
    const AnimatedComponent = (props) => {
        return (
            <div className="wow bounceInDown">
                <Component {...props}/>
            </div>
        )
    }

    return AnimatedComponent
}

const withDismiss = (Component) => {
    class DismissedComponent extends React.Component{

        componentDidMount() {
            setTimeout(() => {
                this.props.toggle();
            },2000);
        }
        render(){
            return(
                <Component {...this.props} /> 
            )
        }
        
    }
    return DismissedComponent
}
export const AnimatedComponent = withAnimation(Alert);
export const DismissedComponent = withDismiss(AnimatedComponent);

export default Alert;