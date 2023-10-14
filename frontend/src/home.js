import peopleImg from './images/people.png'

const Home = () => {
    return (
        <div className="card text-bg-dark" style={{maxWidth: "800px"}}>
            <img src={peopleImg} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <h2 className="card-title" style={{textAlign: "center", fontWeight: 'bold'}}>Welcome to KimBank</h2>
                    <p className="card-text" style={{fontSize: "125%", textAlign: "center"}}>Welcome to KimBank, the only place where your capital will turn into cryto-actives that may or may not be worth something within the next 2 months.</p>
                    <p className="card-text" style={{color: 'black', fontWeight: 'bold'}}><small>-CEO Mr. Kim-</small></p>
                </div>
        </div>
    );
}

export default Home;