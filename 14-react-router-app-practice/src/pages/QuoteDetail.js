import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";

import Comments from '../components/comments/Comments';

const QuoteDetail = () => {

    const params = useParams();
    console.log("Quote ID : ", params.quoteId)
    return (
        <Fragment>
            <h1>Quote Detail Page</h1>
            <h1>{params.quoteId}</h1>
            <Route path={`/quotes/${params.quoteId}/comments`} exact>
               <Comments />
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;