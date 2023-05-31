import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Container">
      <Navbar nickname="Adrian"/>
      <div className="Hero">
        <LeftHero nickname="Adrian"/>
        <RightHero/>
      </div>
    </div>
  );
}

function Navbar (props) {
  const { nickname } = props;
  const title = <strong>{nickname}'s Portfolio</strong>
  return (
    <div className="App">
      <h1>{title}</h1>
    </div>
  )
}

function LeftHero (props){
  const myName = <strong>Adrian Hadinata Hadi Darsono</strong>
  const myJob = <p>Full Stack Developer</p>
  const { nickname } = props;

  const projects = ["PT. Globalindo - Sewing Data Analytics (Full stack)", "PT. Globalindo - E-BUDGETING (Full stack)", "PT. Rehobat Sringin - Payroll Management System (Full stack)"];
  const listProjects = projects.map((project) => 
    <li>{ project }</li>
  )

  return (
    <div className="MyText">
      <h1>{myName}</h1>
      {myJob}
      <p>PHP | SQL | No SQL | CSS | Javascript | Python | Dart</p>
      <p>CodeIgniter 3 & 4 | Laravel 8 | Bootstrap | Tailwind | React | Vue | JQuery | Node.js | Next.js | Flutter</p>
      <ul>
        { listProjects }
      </ul>
      <a onClick={(e) => ShowModal(nickname, e)} href="#">Let's connect with me ...</a>
    </div>
  )
  
}

function RightHero (){
  return (
    <div className="MyPic">
      <img src="adrianCasual.jpg" alt=""/>
    </div>
  )
}

function ShowModal (e) {
  return alert('WA: 0858-0252-0642' + ' ('+ e +')')
  // return console.log(e);
  
}

export default App;
