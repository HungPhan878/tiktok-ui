import PropTypes from "prop-types";
import Header from "../components/Header";

function HeaderOnly({ children }) {
  return (
    <div className="wrapper">
      <Header />

      <div className="inner">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

HeaderOnly.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderOnly;
