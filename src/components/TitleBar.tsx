import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import miniLogo from "../../public/minilogo.svg";

import styles from "../styles/TitleBar.module.scss";

const TitleBar = () => {
	const titleBarRef = useRef<HTMLDivElement>(null);
	const [expanded, setExpanded] = useState(false);

	const handleScroll = (_: Event) => {
		if (titleBarRef.current != null) {
			const position = titleBarRef.current.getBoundingClientRect().top;

			setExpanded(position == 0);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<div
			ref={titleBarRef}
			className={`${styles.titlebar} ${expanded ? styles.expanded : ""}`}
		>
			<div className={styles.minilogo}>
				<Image src={miniLogo} alt="" />
			</div>
			<div className={styles.spacer}></div>
			<a href="">INFO</a>
			<a href="">PROGETTI</a>
			<a href="">CONTATTI</a>
		</div>
	);
};

export default TitleBar;
