import React, { Component } from "react";
import { Card,Container,Row,Col } from 'react-bootstrap';
import {Link, Route, Switch} from "react-router-dom";
import Globle_details from "./globle_details.component";
import Local_details from "./local_details.component";
import Nav from "./nav.component";

export default class stateReport extends Component {

        state = {

                global_deaths:'',
                global_new_cases:'',
                global_new_deaths:'',
                global_recovered:'',
                global_total_cases:'',



                local_active_cases:'',
                local_deaths:'',
                local_new_cases:'',
                local_new_deaths:'',
                local_total_cases:'',
                total_pcr_testing_count:''

        };

    componentDidMount() {
    fetch("https://hpb.health.gov.lk/api/get-current-statistical")
        .then(Response => Response.json())
        .then(data => {
            console.log(data.data)
            // console.log(this.state.local_recovered)


            this.setState({ local_active_cases: data.data.local_active_cases });
            this.setState({ local_deaths: data.data.local_deaths });
            this.setState({ local_new_cases: data.data.local_new_cases });
            this.setState({ local_total_cases: data.data.local_total_cases });
            this.setState({ total_pcr_testing_count: data.data.total_pcr_testing_count });


            this.setState({ global_deaths: data.data.global_deaths });
            this.setState({ global_new_cases: data.data.global_new_cases });
            this.setState({ global_recovered: data.data.global_recovered });
            this.setState({ global_total_cases: data.data.global_total_cases });
        })

    }
    render() {
        // const {covid_data} = this.state;
        return (
            <div>
                <div className="bg-white mt-5">

                <Link className="nav-link" to={"/stat-report/globle_details"}>Globle Report</Link>
                <Link className="nav-link" to={"/stat-report/local_details"}>Local Report</Link>
                </div>
            <Switch>
                <Route path="/stat-report/globle_details" >
                <Globle_details
                    global_deaths={this.state.global_deaths}
                    global_new_cases={this.state.global_new_cases}
                    global_recovered={this.state.global_recovered}
                    global_total_cases={this.state.global_total_cases}
                >
                </Globle_details>
                </Route>
                <Route path="/stat-report/local_details" >
                <Local_details
                    local_active_cases={this.state.local_active_cases}
                    local_deaths={this.state.local_deaths}
                    local_new_cases={this.state.local_new_cases}
                    local_total_cases={this.state.local_total_cases}
                    total_pcr_testing_count={this.state.total_pcr_testing_count}
                >
                </Local_details>
                </Route>
            </Switch>
            </div>
        );
    }
}