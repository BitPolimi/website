import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import miniLogo from "../public/minilogo.svg";

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
		<div ref={titleBarRef} className={`titlebar ${expanded ? "expanded" : ""}`}>
			<div className="minilogo">
				<Image src={miniLogo} alt="" />
			</div>
			<div className="spacer"></div>
			<a href="">INFO</a>
			<a href="">PROJECTS</a>
			<a href="">CONTACTS</a>
		</div>
	);
};

export default TitleBar;
