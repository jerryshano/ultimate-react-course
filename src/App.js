import "./App.css";
import jerryPic from "./profile.png";

function Avatar(props) {
  return <img src={props.img} alt="react" className="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>Jerry Kankelborg</h1>
      <p className="text">
        lorem 40 A tiny VS Code extension made up of a few commands that
        generate and insert lorem ipsum text into a text file. To use the
      </p>
    </div>
  );
}
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill} key={skill.skill} />
      ))}
    </div>
  );
}
function Skill({ skill }) {
  return (
    <div className="skill" style={{ backgroundColor: skill.color }}>
      {skill.skill} {skill.level === "beginner" && <span>👶</span>}
      {skill.level === "intermediate" && <span>👍</span>}
      {skill.level === "advanced" && <span>💪</span>}
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar img={jerryPic} />
      <section className="data">
        <Intro />
        <SkillList />
      </section>
    </div>
  );
}

export default App;
