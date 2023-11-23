
import './App.css';
import Profile from './profile/profile';
import photo from './profile/PhotoNasr.jfif'

function App() {
  const alertMyProfile = name => alert('Profile : '+name);
  const stylePhoto = {
    border: '5px solid darkred',
    borderRadius: '300px',
    marginTop: '40px',
    marginBottom: '10px',
  }
  return (
    <div className = "App">
      <Profile 
      fullName = 'wael yousfi' 
      bio = 'Im  FullStack  JS  intern  at  Gomycode' 
      profession = 'Electric-Automatic Engineer' 
      handleName = {alertMyProfile}>
        <img src={photo} alt = "PicNasr" style = {stylePhoto}/>
      </Profile>
    </div>
  );
}

export default App;