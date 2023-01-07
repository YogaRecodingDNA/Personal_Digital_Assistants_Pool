import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './assets/images/alexa.png';
import CortanaImage from './assets/images/cortana.png';
import SiriImage from './assets/images/siri.png';

function App() {

    return (
        <div>
            

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
                        </div>
                        <div className="column is-3">
                            <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} />
                        </div>
                        <div className="column is-3">
                            <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;