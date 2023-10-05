import classNames from "classnames/bind";
import styles from "./DefaultLayout.scss";



import Header from "../components/Header";
import Sidebar from "./Sidebar";

const cx = classNames.bind(styles);


function DefaultLayout({children}) {
    return ( 
        <div className="wrapper">
            <Header/>

            <div className={cx("inner")}>
                <Sidebar/>

                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;