import React, { useState } from 'react';
import './Chat.css';
import InsertCommentOutlinedIcon from '@material-ui/icons/InsertCommentOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';

const Chat = (props) => {
    const [OpenChat, SetOpenChat] = useState(false)
    const [OpenSearch, SetOpenSearch] = useState(false)

    return (
        <div>
            <div className="Chat">
                <div className="Chat__icon1" onClick={() => SetOpenChat(!OpenChat)}>
                    <InsertCommentOutlinedIcon />
                </div>
                <div className={`Chat__icon2 ${OpenSearch ? "openSearch" : "closeSearch"}`}>
                    {
                        OpenSearch ?
                            <form className="Wrapper">
                                <SearchOutlinedIcon onClick={() => SetOpenSearch(!OpenSearch)} />
                                <input type="text" placeholder="Search" />
                            </form>
                            :
                            <SearchOutlinedIcon onClick={() => SetOpenSearch(!OpenSearch)} />
                    }
                </div>
            </div >
            <div className={`Chat__Wrapper ${OpenChat ? "open" : "close"}`}>
                <div className={`header ${OpenChat ? "openWrapper" : "closeWrapper"}`}>
                    <div onClick={() => SetOpenChat(!OpenChat)}>
                        <CloseIcon />
                    </div>
                </div>
                <div className={`content ${OpenChat ? "openWrapper" : "closeWrapper"}`}>
                    <div className="value">
                        <p>asdasdasd</p>
                    </div>
                </div>
                <div className={`footer ${OpenChat ? "openWrapper" : "closeWrapper"}`}>
                    <div className="input__1">
                        <input type="text" placeholder="Chat Here" />
                        <div className="icon">
                            <SendIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;