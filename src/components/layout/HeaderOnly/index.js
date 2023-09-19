import Header from "../Header";

function HeaderOnly({children}) {
    return ( 
        <div className="wrapper">
            <Header/>

            <div className="inner">
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default HeaderOnly;