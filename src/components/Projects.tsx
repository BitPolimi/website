import Image, { StaticImageData } from "next/image";

import explorer from "../../public/explorer.jpg";
import fullnode from "../../public/fullnode.jpg";
import wallet from "../../public/wallet.jpg";

import styles from "../styles/Projects.module.scss";

const Projects = () => {
	const createProject = (
		title: string,
		description: string,
		img: StaticImageData
	) => {
		return (
			<div className={styles.project}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.text}>{description}</div>
				<div className={styles.image}>
					<Image src={img} />
				</div>
			</div>
		);
	};

	return (
		<div className={styles.projects}>
			{createProject(
				"Wallet",
				`I wallet sono una delle applicazioni più sviluppate nell'ecosistema
	 				Bitcoin. Ma come funzionano e come sono fatti? Se lo vuoi scoprire
	 				entra a far parte del progetto “Wallet Development” in cui, assieme ad
	 				altri studenti con le tue stesse passioni, prenderai parte alla
	 				creazione di un vero e proprio wallet privacy oriented su Bitcoin.`,
				wallet
			)}
			{createProject(
				"Full Node",
				`I wallet sono una delle applicazioni più sviluppate nell'ecosistema
					Bitcoin. Ma come funzionano e come sono fatti? Se lo vuoi scoprire
					entra a far parte del progetto “Wallet Development” in cui, assieme ad
					altri studenti con le tue stesse passioni, prenderai parte alla
					creazione di un vero e proprio wallet privacy oriented su Bitcoin.`,
				fullnode
			)}
			{createProject(
				"Bitcoin Explorer",
				`Un singolo nodo è vulnerabile agli attacchi, ma tanti insieme creano
					un network decentralizzato praticamente impenetrabile. Potrai
					cimentarti nella creazione e nella gestione di un Nodo Bitcoin,
					elemento fondante dell'omonima rete e di ogni altra rete Peer-to-Peer:
					comprenderne il funzionamento è cruciale per costruire una rete sicura
					e decentralizzata.`,
				explorer
			)}
		</div>
	);
};

export default Projects;
