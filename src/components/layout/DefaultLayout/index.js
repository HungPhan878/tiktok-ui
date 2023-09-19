import Header from "../Header";
import Sidebar from "./Sidebar";

function DefaultLayout({children}) {
    return ( 
        <div className="wrapper">
            <Header/>

            <div className="inner">
                <Sidebar/>

                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;