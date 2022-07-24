import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
    { id: "q1", author: "Max", text: "Max's Comment" },
    { id: "q2", author: "Pooja", text: "Pooja's Comment" },
];


const QuoteDetail = () => {

    const params = useParams();
    console.log("Quote ID : ", params.quoteId)

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if (!quote) {
        return <p> No Quote Found...!!!!!</p>
    }
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <Route path={`/quotes/${params.quoteId}/comments`} exact>
                <Comments />
            </Route>
        </Fragment>
    );
}

export default QuoteDetail;