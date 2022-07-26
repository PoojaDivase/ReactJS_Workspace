import { Link, Route, Routes } from "react-router-dom";

const Welcome = () => {
    return (
        <section>
            <h1>The Welcome page</h1>
            <Link to="new-user">New User</Link>
            <Routes>
                <Route path="new-user" element={<p>Welcome, New User</p>}>
                </Route>
            </Routes>
        </section>);
}

export default Welcome;