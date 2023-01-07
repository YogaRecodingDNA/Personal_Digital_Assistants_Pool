import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import AlexaImage from './assets/images/alexa.png';
import CortanaImage from './assets/images/cortana.png';
import SiriImage from './assets/images/siri.png';

function App() {

    return (
        <div>
            <div>Personal Digital Assistants</div>

            <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImage} />
            <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImage} />
            <ProfileCard title="Siri" handle="@siri01" image={SiriImage} />
        </div>
    );
}

export default App;