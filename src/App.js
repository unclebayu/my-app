import './App.css';
// import TugasIntroReact from './Tugas-Intro-ReactJS/TugasIntroReact';
// import TugasPengenalanReact from './Tugas-Pengenalan-ReactJS/TugasPengenalanReact';
// import TugasHooks from './Tugas-Hooks/TugasHooks';
import TugasCRUDHooks from './TugasCRUDHooks';

function App() {
  return(
    <>
    <div className="App">
      <div className="now-section">
        {/* <TugasIntroReact/>
        <TugasHooks seconds={100}/>
        <TugasPengenalanReact/> */}
        <TugasCRUDHooks/>
      </div>
    </div>
    </>
  )
}
export default App;
