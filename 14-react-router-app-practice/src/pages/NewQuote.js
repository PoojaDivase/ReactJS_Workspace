import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";


const NewQuote = () => {
    const history = useHistory(); // all used pages history
    const addQuoteHandler = (quotedata) => {
        console.log(quotedata);

        history.push("/quotes");
    }

    return <QuoteForm onAddQuote={addQuoteHandler} />
}

export default NewQuote;