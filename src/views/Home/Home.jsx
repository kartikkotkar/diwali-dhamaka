import { useSearchParams } from "react-router-dom";
import "./Home.css";
import DiwaliLamp from "./diwali-lamp.png"
import Lamp from "./lamp.png"
import { useState } from "react";




import "./Home.css";

const GREETINGS = [
    "स्नेहाचा सुगंध दरवळला, आनंदाचा सण आला.विनंती आमची परमेश्वराला, सौख्य, समृध्दी लाभो तुम्हाला.दिवाळीच्या हार्दिक शुभेच्छा!",
    "सर्व मित्र परिवाराला … दीपावलीच्या धनदायी ,प्रकाशमय,चैतन्यदायी मंगलमय शुभेच्छा !दीपावलीच्या हार्दिक शुभेछा…",
    "सगळा आनंद सगळे सौख्य,सगळ्या स्वप्नांची पूर्णता,यशाची सगळी शिखरे,सगळे ऐश्वर्य,हे आपल्याला मिळू दे,ही दीपावली आपल्या आयुष्याला एक नवा उजाळा देवू दे…",
    "लक्ष लक्ष दिव्यांनी उजळुन निघो ही निशा घेऊनि येवो नवी उमेद नवी आशा,सोबत आमच्या लक्ष लक्ष शुभेच्छा!"
]

function Home() {

    const [SearchParams] = useSearchParams();


    const to = SearchParams.get("to");
    const from = SearchParams.get("from");
    const greetingNumber = SearchParams.get("g") >= GREETINGS.length ? 0 : SearchParams.get("g") || 0;
    const themeNumber = SearchParams.get("t");
    return (
        <div>
            <div className={`greetings-container ${`theme-${themeNumber}`}`}>
                <img src={DiwaliLamp} className="diwali-lamp left-lamp" />

                <img src={DiwaliLamp} className="diwali-lamp right-lamp" />

                <h1 className="from-dear">Dear {to} 👑😎</h1>
                <p>
                    {GREETINGS[greetingNumber]}
                </p>
                <span className="from-text">
                    🙏शुभेच्छुक {from}
                </span>

                <img src={Lamp} className="lamp" />

            </div>
                <p className="create-yuor-own">
                    Do you want to create your own Diwali Greeting? Customize it here👇
                </p>

            <p className="url">
                {import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={greetingNumber}&t={themeNumber}
            </p>

            <div className="inpit-container">

                <input type="text" placeholder="To"
                    className="input"
                    value={to}
                    onChange={(e) => {
                        setTo(e.target.value)
                    }
                    } />

                <input type="text" placeholder="From"
                    className="input"
                    value={from}
                    onChange={(e) => {
                        setFrom(e.target.value)
                    }
                    } />

                <select value={greetingNumber}
                    className="input"
                    onChange={(e) => {
                        setgreetingNumber(e.target.value)
                    }}>
                    <option value="0"> Greeting 1</option>
                    <option value="1"> Greeting 2</option>
                    <option value="2"> Greeting 3</option>
                    <option value="3"> Greeting 4</option>
                    <option value="4"> Greeting 5</option>
                    <option value="5"> Greeting 6</option>

                </select>

                <select value={themeNumber}
                    className="input"
                    onChange={(e) => {
                        SetThemeNumber(e.target.value)
                    }}>
                    <option value="0">None</option>
                    <option value="1">theme 1</option>
                    <option value="2"> theme 2</option>
                    <option value="3"> theme 3</option>
                    <option value="4"> theme 4</option>
                    <option value="5"> theme 5</option>
                    <option value="5"> theme 6</option>

                </select>

            </div>




        </div>
    )
}

export default Home