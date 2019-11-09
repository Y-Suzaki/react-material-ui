import connect from "react-redux/es/connect/connect";
import UpdateList from '../components/update/updateList';

const mapStateToProps = (state) => {
    return {
        notices: state.update
    }
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateList);