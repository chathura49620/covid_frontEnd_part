
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import StateReport from "./components/stateReport.component";
import HelpGuide from "./components/help-guide.component";
import Nav from "./components/nav.component";

function App() {


    return (<Router>
            <div className="App">
                <meta name="csrf-token" content="{{ csrf_token() }}" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossOrigin="anonymous"
                />
                <meta name="csrf-token" content="{{ csrf_token() }}"/>
            <Nav />


                        <Switch>
                            <Route exact path='/' component={Login} />
                            <Route path="/sign-in" component={Login} />
                            <Route path="/sign-up" component={SignUp} />
                        </Switch>
                    <Route path="/stat-report" component={StateReport} />
                    <Route path="/help-guide" component={HelpGuide} />

            </div>
    </Router>
    );
}

export default App;
