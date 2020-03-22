import React from 'react';
import { Pagination } from 'antd';
import qs from 'qs'
import { useLocation, Link } from 'react-router-dom';

export default function IndexPagination() {
    let { search } = useLocation();
    // console.log(history)
    let { tab = "all", page = 1 } = qs.parse(search.substr(1))
    // console.log(tab, page)
    return <div>
        <Pagination
            // showQuickJumper={'false'}
            current={page - 0}
            pageSize={20}
            total={1000}
            itemRender={(page, type, originalElement) => {
                switch (type) {
                    case "page":
                        return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                    case "prev":
                        return <Link to={`/?tab=${tab}&page=${page}`}>prev</Link>
                    case "next":
                        return <Link to={`/?tab=${tab}&page=${page}`}>next</Link>
                    default:
                        return <Link to={`/?tab=${tab}&page=${page}`}>{originalElement}</Link>;

                }
            }} />
    </div>
}