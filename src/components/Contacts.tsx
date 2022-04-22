import Image from "next/image";

import telegram from "../../public/telegram.svg";
import youtube from "../../public/youtube.svg";
import linkedin from "../../public/linkedin.svg";
import discord from "../../public/discord.svg";
import github from "../../public/github.svg";
import instagram from "../../public/instagram.svg";

import styles from "../styles/Contacts.module.scss";

const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<h1 className="title">
				Unisciti a{" "}
				<a className={styles.link} href="">
					noi
				</a>
			</h1>
		</div>
	);
};

export default Contacts;
