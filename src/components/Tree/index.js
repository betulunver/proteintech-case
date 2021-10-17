import React from 'react'
import { connect } from 'react-redux';
import tree from '../../assets/tree-park-svgrepo-com.svg';
import Apple from '../Apple';

const Tree = (props) => {
    console.log("tree",props)
    return (
        <div className={"tree-area"}>
             <img src={tree} className={props.tree.class.join(" ")} alt="apple" />
            <Apple className={props.apple1.class.join(" ")}></Apple>
            <Apple  className={props.apple2.class.join(" ")}></Apple>
            <Apple  className={props.apple3.class.join(" ")}></Apple>
        </div>
    )
}
const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps) (Tree)
