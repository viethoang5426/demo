import { createContext, Dispatch, ReactNode, useEffect, useReducer } from "react";

interface AuthState {
    loading: boolean;
    error: boolean;
    user: any;
}

interface AuthAction {
    type: string;
    payload?: any;
}

const initState: AuthState = {
    loading: false,
    error: false,
    user: JSON.parse(localStorage.getItem('user') || 'null') || null,
};

// Khai báo AuthContext đúng với kiểu
export const AuthContext = createContext<{
    user: any;
    loading: boolean;
    error: boolean;
    dispatch: Dispatch<AuthAction>;
}>({
    user: null,
    loading: false,
    error: false,
    dispatch: () => {},
});

const AuthReduce = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                loading: true,
                error: false,
                user: null,
            };
        case "LOGIN_SUCCESS":
            return {
                loading: false,
                error: false,
                user: action.payload,
            };
        case "LOGIN_FAILURE":
            return {
                loading: false,
                error: true,
                user: null,
            };
        case "LOGOUT":
            return {
                loading: false,
                error: false,
                user: null,
            };
        default:
            return state;
    }
};

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(AuthReduce, initState);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state?.user]);

    return (
        <AuthContext.Provider value={{ user: state.user, loading: state.loading, error: state.error, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
