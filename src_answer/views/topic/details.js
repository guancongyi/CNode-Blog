import React from "react";
import {Card} from "antd"
import { Link } from "react-router-dom";
export default function Details(props){
    let {loading,data} = props;
    let {title,author,content} = data;
    return <Card
        loading={loading}
        title={<h1>{title} - <Link to={`/user/${author.loginname}`}>{author.loginname}</Link></h1>}
    >
        <div
            dangerouslySetInnerHTML={{
                __html:content
            }}
        ></div>
    </Card>
}