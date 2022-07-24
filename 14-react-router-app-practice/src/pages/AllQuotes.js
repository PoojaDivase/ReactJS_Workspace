import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    { id: "q1", author: "Max", text: "Max's Comment" },
    { id: "q2", author: "Pooja", text: "Pooja's Comment" },
];


const AllQuotes = () => {

    return <section>
        <h1>All Quotes Page</h1>
        <QuoteList quotes={DUMMY_QUOTES} />
    </section>;
}

export default AllQuotes;