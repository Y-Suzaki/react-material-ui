import React from 'react';

class NoticeList extends React.Component{
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