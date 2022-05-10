import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitle }) => {


    return (
        <>
            <h1>{ saludo }</h1>
            <p>{ subtitle }</p>
        </>
    ); 
    
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitle: 'Iam a subtitle'
}

export default PrimeraApp;