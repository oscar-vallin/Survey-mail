import { Link } from "react-router-dom"

const Landing = () => {
    return(
        <div style={{textAlign: 'center'}}>
            <h1>Email</h1>
            <h3>Welcome</h3>
            Collect feedback from your user
            <p>Buy credits and generate your surveys</p>
            <div>
                <Link to="/surveys">go to surveys review</Link>
            </div>
        </div>
    );
}
export default Landing;