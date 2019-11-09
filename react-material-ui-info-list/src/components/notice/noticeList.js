import React from 'react';

class NoticeList extends React.Component{
    componentDidMount() {
        this.props.listNotice();
    }

    render() {
        return (
            <div>
                NoticeList!
                {
                    this.props.notices.map(notice => {
                        return (
                            <div>{notice}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default NoticeList;