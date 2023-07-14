import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
	{
		skill: "HTML + CSS",
		emoji: "💪",
		bgColor: "blue"
	},
	{
		skill: "Javascript",
		emoji: "👍",
		bgColor: "yellow"
	},
	{
		skill: "Web-design",
		emoji: "💪",
		bgColor: "pink"
	},
	{
		skill: "Python",
		emoji: "💪",
		bgColor: "orange"
	},
	{
		skill: "React",
		emoji: "👨‍🎓",
		bgColor: "cyan"
	},
	{
		skill: "Personal Finance",
		emoji: "🤯",
		bgColor: "green"
	}
];

function App() {
	return (
		<div className="card">
			<Avatar />
			<div className="data">
				<Intro />
				{/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
				<ul className="skill-list">
					{skills.map((skill, index) => (
						<SkillList
							key={skill.index}
							skill={skill.skill}
							emoji={skill.emoji}
							bgColor={skill.bgColor}
						/>
					))}
				</ul>
			</div>
		</div>
	);
}

function Avatar() {
	return (
		<img
			className="avatar"
			src="https://i.ibb.co/m4dNn1b/headshot.jpg"
			alt="jared pic"
		/>
	);
}

function Intro() {
	return (
		<div>
			<h1>Jared Henry</h1>
			<p>
				Aspiring full-stack web developer. I want to build a small business
				around creating websites for other small businesses in my community.
				When I'm not coding I'm passionate about personal finance, video games,
				and investing.
			</p>
		</div>
	);
}

function SkillList(props) {
	return (
		<li className="skill" style={{ backgroundColor: props.bgColor }}>
			{props.skill} {props.emoji}
		</li>
	);
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
