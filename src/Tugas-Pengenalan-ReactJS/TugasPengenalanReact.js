import logo from './logo.png';

const Logo = () => {
  return(
    <img src={logo} alt="logo" />
  )
}
function TugasPengenalanReact() {
  let thingsToDo = ["Belajar GIT & CLI", "Belajar HTML & CSS", "Belajar Javascript", "Belajar ReactJS Dasar", "Belajar ReactJS Advance"]
  
    return (
      <div className="App">
        <header className="App-header">
          <div className='custom-box'>
            <Logo/>
            <div className='title-section'>
              <h1>
                THINGS TO DO
              </h1>
                During bootcamp in sanbercode
            </div>
            {thingsToDo.map((item)=>{
            return( 
              <div className='Custom-checkbox'><input type="checkbox" /> {item} </div>
            )
          })}
          <button>SEND</button>
          </div>
        </header>
      </div>
    )
}
export default TugasPengenalanReact;
