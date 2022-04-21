import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TitleBar from "../components/TitleBar";

import logo from "../public/logo.png";

const Index: NextPage = () => {
	const titleBarRef = useRef<HTMLDivElement>(null);
	const [titleBarExpanded, setTitleBarExpanded] = useState(false);

	const handleScroll = (_: Event) => {
		if (titleBarRef.current != null) {
			const position = titleBarRef.current.getBoundingClientRect().top;

			if (position == 0) {
				setTitleBarExpanded(true);
			} else {
				setTitleBarExpanded(false);
			}
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className="background">
			<div className="page">
				<div className="logo">
					<Image src={logo} alt="" />
				</div>
				<TitleBar expanded={titleBarExpanded} ref={titleBarRef} />
				<div className="info"></div>
				<div className="projects"></div>
				<div className="contacts"></div>
			</div>
		</div>
	);
};

export default Index;
