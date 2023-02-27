import App from "../src/components/App"

const divStyles = {
  marginTop: '30px',
  display: 'flex',
  justifyContent: 'center'
}


const Home = () => {
  return (
    <div style={divStyles}>
      <App/>
    </div>
    
  )
}

export default Home