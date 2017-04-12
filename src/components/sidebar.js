import React from 'react';
import {connect} from 'react-redux';
import './sidebar.css';
import {Link} from 'react-router-dom';

export function Sidebar(props) {
    const folders = props.folderList.map(folder => {
        const endpoint = `/${folder.name.toLowerCase()}`;
        return (<li key={folder.id} className="folder-menu-list-item">
            <Link to={endpoint}>
                {folder.name}
            </Link>
        </li>)}
    );
[<li></li>, <li></li>]
    return (
        <div className="sidebar sidebar-left">
            <nav className="folder-menu">
                <ul className="folder-menu-list">
                    {folders}
                </ul>
            </nav>
        </div>
    );
}

const mapStateToProps = state => ({
    folderList: Object.keys(state).map(folderId => state[folderId])
});

export default connect(mapStateToProps)(Sidebar);
