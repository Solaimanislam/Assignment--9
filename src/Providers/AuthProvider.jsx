import { createContext } from "react";
import PropTypes from 'prop-types';


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const AuthInfo = {name: 'nodi sagor'}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}