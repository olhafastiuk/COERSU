import Context from './Context';

const ContextProvider = ({ children }) => {
    const scroll = (id) => {
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
        });
    };

    return (
        <Context.Provider
            value={{
                scroll,
            }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
