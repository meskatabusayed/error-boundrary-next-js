

const layout = ({children , posts} : {children : React.ReactNode , posts : React.ReactNode}) => {
    return (
        <>
            
            {children}
            {posts}
        </>
    );
};

export default layout;