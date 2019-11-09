import connect from "react-redux/es/connect/connect";
import NoticeList from '../components/notice/noticeList';

const mapStateToProps = (state) => {
    return {
        notices: state.notice
    }
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(NoticeList);