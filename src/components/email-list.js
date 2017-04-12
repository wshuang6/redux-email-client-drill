import React from 'react';
import {connect} from 'react-redux';
import './email-list.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export function EmailList(props) {
    const emails = props.emailList.map((email, index) => {
        const endpoint=`/${props.folderName.toLowerCase()}/${index}`;
        return (<li key={index} className="email-list-email">
            <div className="email-list-email-from">
                {email.from}
            </div>
            <div className="email-list-email-title">
                <Link to={endpoint}>
                    {email.title}
                </Link>
            </div>
        </li>)
    });

    return (
        <div className="folder">
            <h2>{props.folderName}</h2>

            <ul className="email-list">
                {emails}
            </ul>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    const folder = state[props.match.params.folderId];
    return {
        folderName: folder.name,
        emailList: Object.keys(folder.emails).map(emailId =>
            folder.emails[emailId]
        )
    }
};

export default connect(mapStateToProps)(EmailList);
