import React, { useEffect } from 'react';
import { Pagination } from 'antd';
import qs from "qs";
import { useLocation, Link } from 'react-router-dom';

export default function IndexPagination(){
    let {search} = useLocation();
    // let history = useHistory();
    let {tab="all",page=1} = qs.parse(search.substr(1));
    return <div className="index_pagination">
        <Pagination 
            current={page-0}
            total={750}
            pageSize={15}
            itemRender={(page,type)=>{
                switch(type){
                    case "page":
                        return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                    case "prev":
                        return <Link to={`/?tab=${tab}&page=${page}`}>{"<"}</Link>
                    case "next":
                        return <Link to={`/?tab=${tab}&page=${page}`}>{">"}</Link>
                        default:
                            return <Link to={`/?tab=${tab}&page=${page}`}>{"…"}</Link>
                }
            }}
        />
    </div>
}