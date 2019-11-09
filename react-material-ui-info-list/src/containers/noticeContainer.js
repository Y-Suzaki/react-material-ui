import connect from "react-redux/es/connect/connect";
import NoticeList from '../components/notice/noticeList';
import {addNotice, deleteNotice, editNotice, listNotice} from '../actions/noticeAction'

const mapStateToProps = (state) => {
    return {
        notices: state.notice
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        listNotice: () => dispatch(listNotice())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NoticeList);