import React, { Component } from "react";
import Header from "../components/Header";
import { Container, Col, Row } from "reactstrap";
import Wrapper from "../components/Wrapper/";
import CreatePCard from "../components/CreatePCard";
// include TextArea above if a large input field is needed


class CreateUser extends Component {
	routeLogin = () => {
		this.props.history.push("/login")
	}

	render() {
		return (
			<div>
				<Header></Header>
				<Wrapper>
				<Container>
					<Col>
					<Row>
						<CreatePCard routeLogin={this.routeLogin}>
							
						</CreatePCard>

					</Row>
					</Col>	

					</Container>
				</Wrapper>
			</div>
		);
	}
}

export default CreateUser;