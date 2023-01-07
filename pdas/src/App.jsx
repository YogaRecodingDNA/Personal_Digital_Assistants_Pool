import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './assets/images/alexa.png';
import CortanaImage from './assets/images/cortana.png';
import SiriImage from './assets/images/siri.png';

function App() {

    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                image={AlexaImage}
                                description="Alexa is the Amazon PDA."
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana32"
                                image={CortanaImage}
                                description="Cortana is the Microsoft PDA."
                            />
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                                title="Siri"
                                handle="@siri01"
                                image={SiriImage}
                                description="Siri is the Apple PDA."
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;