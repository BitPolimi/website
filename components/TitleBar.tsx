import { forwardRef } from "react";
import { Ref } from "react";
import Image from "next/image";

import miniLogo from "../public/minilogo.svg";

interface Props {
	expanded: boolean;
}

const TitleBar = forwardRef((props: Props, ref: Ref<HTMLDivElement>) => {
	return (
		<div ref={ref} className={`titlebar ${props.expanded ? "expanded" : ""}`}>
			<div className="minilogo">
				<Image src={miniLogo} alt="" />
			</div>
			<div className="spacer"></div>
			<a href="">INFO</a>
			<a href="">PROJECTS</a>
			<a href="">CONTACTS</a>
		</div>
	);
});

export default TitleBar;
