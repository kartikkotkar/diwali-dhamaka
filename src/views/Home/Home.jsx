import { useSearchParams } from "react-router-dom"
import "./Home.css";

const GREETINGS =[
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
    return (
        <div className="greetings-container">
            <h1 className="from-dear">Dear {to} 👑😎</h1>
            <p>
                {GREETINGS[greetingNumber]}
                </p>
                <span className="from-text">
                🙏शुभेच्छुक {from}
                </span>

        </div>
    )
}

export default Home