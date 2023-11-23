import PropTypes from "prop-types"

function Profile ({fullName, bio, profession, handleName, children}) {
    const styleProfil = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily:"'Rasa', serif",
        fontWeight: 300,
        margin: 0,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rebeccapurple',
    }
    const stylebutton = {
        padding: '7px 20px',
        border: '1px solid grey',
        margin: '0 0 0.3em 0.3em',
        borderRadius: '0.2em',
        boxSizing: 'border-box',
        textDecoration: 'none',
        fontFamily: "'Roboto',sans-serif",
        fontWeight: 400,
        color: 'purple',
        textAlign: 'center',
    }
    const styleText = {
        color: 'cornsilk',
        fontFamily: "'Barlow Condensed' sans-serif",
        fontWeight: 250,
        textTransform: 'uppercase',
    }
    const styleName = {
        color: 'deepskyblue',
        fontSize: '35px',
        marginBottom: '0px',
    }
    const styleProfession = {
        color: 'darkturquoise',
        fontSize: '30px',
    }
    return(
        <div style = {styleProfil}>
            {children}
            <h1 style = {styleText}>
                Hello, my name is
                <span style = {styleName}> {fullName}</span>
            </h1>
            <button style = {stylebutton} onClick = { () => handleName(fullName) }>
                View profile
            </button>
            <h2 style = {styleText}>
                My profession is : <span style = {styleProfession}> {profession}</span>
            </h2>
            <h2>
                <span style = {styleText}> {bio}</span>
            </h2>
            <footer>
            <p>Copyritghts &copy; {fullName} 2021</p>
            </footer>
        </div>
    )
}

Profile.defaultProps = {
    fullName: 'FirstName LastName', 
    bio: 'Personal bio', 
    profession: 'Profession', 
    handleName: () => alert('My Profile'),
}

Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string,
    handleName : PropTypes.func
}

export default Profile