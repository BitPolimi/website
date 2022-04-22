import { NextPage } from "next";
import Image from "next/image";
import TitleBar from "../components/TitleBar";

import logo from "../../public/logo.png";
import Info from "../components/Info";

import styles from "../styles/index.module.scss";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

const Index: NextPage = () => {
	return (
		<div className={styles.background}>
			<div className={styles.page}>
				<div className={styles.logo}>
					<Image src={logo} alt="" />
				</div>
				<TitleBar />
				<Info />
				<Projects />
				<Contacts />
			</div>
		</div>
	);
};

export default Index;
