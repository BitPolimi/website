import { NextPage } from "next";
import Image from "next/image";
import TitleBar from "../components/TitleBar";

import logo from "../public/logo.png";

const Index: NextPage = () => {
	return (
		<div className="background">
			<div className="page">
				<div className="logo">
					<Image src={logo} alt="" />
				</div>
				<TitleBar />
				<div className="projects"></div>
				<div className="info"></div>
				<div className="contacts"></div>
			</div>
		</div>
	);
};

export default Index;
