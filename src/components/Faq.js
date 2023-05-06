import React ,{useState}from "react";
import "../styles/faq.css"

export default function Faq() {

  const faq=[
    {
      id:1,
      question:" What services do you offer as a web3 agency?",
      answer:"We offer a wide range of services, including web design, web development, e-commerce solutions, branding and identity, digital marketing, and more.Whatever your business needs, we can help you achieve your goals."
    },
    {
      id:2,
      question:" How long does it take to develop a decentralized application (dApp)?",
      answer:"We offer a wide range of services, including web design, web development, e-commerce solutions, branding and identity, digital marketing, and more.Whatever your business needs, we can help you achieve your goals."
    },
    {
      id:3,
      question:" Do you offer ongoing support after the dApp is launched?",
      answer:"We offer a wide range of services, including web design, web development, e-commerce solutions, branding and identity, digital marketing, and more.Whatever your business needs, we can help you achieve your goals."
    },

  ]
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
      if (activeIndex === index) {
          setActiveIndex(null);
      } else {
          setActiveIndex(index);
      }
  } 


  return (
    <>
      <div className="faq-container">
        <div className="faq-container-two">
        <h2 className="faq-container-heading">FAQS</h2>{" "}

        {faq.map((value,index)=>
          <>
          <div className="faq-container-border"></div>
          <div className="faq-details" >
        <div className="faq-container-details" key={value.id}>
          <div className="faq-containe-ques-ans" onClick={() => handleToggle(index)}>
            <span className="faq-container-details-span">
              <p className="faq-container-question-no">0{value.id}</p>
              <p className="faq-container-question">
              {value.question}
              </p>
            </span>
          
          </div>
        
          <svg
            width="41"
            height="36"
            viewBox="0 0 41 36"
             className={`faq-downArrow-svg ${activeIndex === index ? 'faq-downArrow-active' : ''}`}
            xmlns="http://www.w3.org/2000/svg"  onClick={() => handleToggle(index)}
          >
            <path
              d="M1.50056 1.09277L1.50056 17.8943H1.51072H1.52135H1.53207H1.54288H1.55378H1.56478H1.57586H1.58704H1.5983H1.60965H1.62109H1.63261H1.64422H1.65592H1.6677H1.67957H1.69152H1.70355H1.71567H1.72787H1.74015H1.75251H1.76496H1.77748H1.79009H1.80277H1.81553H1.82837H1.84129H1.85428H1.86735H1.8805H1.89372H1.90701H1.92039H1.93383H1.94735H1.96093H1.97459H1.98833H2.00213H2.016H2.02995H2.04396H2.05804H2.07219H2.0864H2.10069H2.11503H2.12945H2.14393H2.15847H2.17308H2.18775H2.20249H2.21729H2.23215H2.24707H2.26205H2.27709H2.29219H2.30735H2.32257H2.33785H2.35318H2.36857H2.38402H2.39952H2.41508H2.43069H2.44636H2.46208H2.47785H2.49367H2.50955H2.52548H2.54146H2.55749H2.57357H2.58969H2.60587H2.62209H2.63837H2.65468H2.67105H2.68746H2.70391H2.72041H2.73696H2.75354H2.77017H2.78685H2.80356H2.82032H2.83711H2.85395H2.87082H2.88774H2.90469H2.92168H2.93871H2.95578H2.97288H2.99001H3.00719H3.02439H3.04163H3.05891H3.07621H3.09355H3.11092H3.12832H3.14576H3.16322H3.18071H3.19823H3.21578H3.23336H3.25096H3.26859H3.28625H3.30393H3.32164H3.33937H3.35713H3.37491H3.39271H3.41054H3.42838H3.44625H3.46414H3.48205H3.49998H3.51792H3.53589H3.55387H3.57187H3.58989H3.60792H3.62597H3.64403H3.66211H3.6802H3.6983H3.71642H3.73455H3.75269H3.77085H3.78901H3.80718H3.82536H3.84356H3.86176H3.87996H3.89818H3.9164H3.93463H3.95286H3.9711H3.98934H4.00759H4.02584H4.04409H4.06234H4.0806H4.09885H4.11711H4.13537H4.15363H4.17188H4.19014H4.20839H4.22664H4.24488H4.26312H4.28136H4.29959H4.31782H4.33604H4.35425H4.37246H4.39066H4.40885H4.42703H4.4452H4.46336H4.48151H4.49965H4.51778H4.53589H4.554H4.57208H4.59016H4.60822H4.62626H4.64429H4.66231H4.6803H4.69828H4.71624H4.73419H4.75211H4.77002H4.7879H4.80576H4.82361H4.84143H4.85922H4.877H4.89475H4.91248H4.93018H4.94786H4.96551H4.98314H5.00074H5.01831H5.03585H5.05337H5.07086H5.08831H5.10574H5.12314H5.1405H5.15783H5.17513H5.1924H5.20963H5.22683H5.244H5.26113H5.27822H5.29528H5.3123H5.32929H5.34623H5.36314H5.38001H5.39684H5.41362H5.43037H5.44708H5.46374H5.48036H5.49694H5.51348H5.52997H5.54642H5.56282H5.57917H5.59548H5.61175H5.62796H5.64413H5.66025H5.67631H5.69233H5.7083H5.72422H5.74009H5.7559H5.77167H5.78738H5.80303H5.81864H5.83418H5.84968H5.86511H5.88049H5.89581H5.91108H5.92629H5.94144H5.95653H5.97156H5.98653H6.00143H6.01628H6.03107H6.04579H6.06045H6.07505H6.08958H6.10405H6.11845H6.13279H6.14706H6.16126H6.17539H6.18946H6.20346H6.21739H6.23125H6.24504H6.25876H6.27241H6.28598H6.29948H6.31291H6.32627H6.33955H6.35276H6.36589H6.37894H6.39192H6.40483H6.41765H6.4304H6.44307H6.45565H6.46816H6.48059H6.49294H6.50521H6.51739H6.52949H6.54151H6.55344H6.56529H6.57706H6.58874H6.60034H6.61184H6.62326H6.6346H6.64584H6.657H6.66807H6.67904H6.68993H6.70073H6.71143H6.72204H6.73256H6.74299H6.75332H6.76356H6.77371H6.78375H6.79371H6.80356H6.81332H6.82298H6.83255H6.84201H6.85137H6.86064H6.8698H6.87887H6.88783H6.89669H6.90545H6.9141H6.92265H6.9311H6.93944H6.94768H6.95581H6.96383H6.97175H6.97955H6.98725H6.99485H7.00233H7.0097H7.01696H7.02411H7.03115H7.03808H7.04489H7.05159H7.05818H7.06465H7.07101H7.07726H7.08338H7.08939H7.09528H7.10106H7.10672H7.11225H7.11767H7.12297H7.12815H7.13321H7.13814H7.14296H7.14765H7.15221H7.15666H7.16098H7.16517H7.16924H7.17318H7.177H7.18069H7.18425H7.18768H7.19099H7.19416H7.1972H7.20012H7.2029H7.20555H7.20807H7.21046H7.21271H7.21483H7.21681H7.21866H7.22038H7.22196H7.2234H7.2247H7.22587H7.2269H7.22779H7.22854H7.22914H7.22961H7.22994H7.23013L7.23017 18.3943V17.8943C12.7956 17.8943 17.8184 19.4853 22.0937 22.2195L22.429 22.434L22.2952 22.8089L21.8071 24.1756L21.6541 24.6037L21.2134 24.4921L6.99803 20.8915L6.99803 35.417H40.3601V1.37156H22.2622L29.7591 12.7998L30.0288 13.2109L29.6221 13.4875L28.4019 14.3172L28.0259 14.5729L27.7357 14.2228L26.3206 12.5149C21.6506 6.89357 16.4355 1.09277 7.23017 1.09277H7.17489H7.1199H7.0652H7.01078H6.95666H6.90282H6.84926H6.79599H6.74301H6.69031H6.6379H6.58576H6.53391H6.48234H6.43105H6.38004H6.32931H6.27886H6.22868H6.17878H6.12916H6.07981H6.03074H5.98195H5.93342H5.88517H5.83719H5.78948H5.74204H5.69487H5.64798H5.60134H5.55498H5.50889H5.46306H5.41749H5.37219H5.32716H5.28238H5.23787H5.19363H5.14964H5.10592H5.06245H5.01924H4.97629H4.9336H4.89117H4.84899H4.80707H4.7654H4.72399H4.68283H4.64193H4.60127H4.56087H4.52072H4.48081H4.44116H4.40175H4.3626H4.32369H4.28502H4.2466H4.20843H4.1705H4.13281H4.09537H4.05817H4.02121H3.98449H3.94801H3.91177H3.87577H3.84H3.80448H3.76919H3.73413H3.69931H3.66473H3.63037H3.59625H3.56237H3.52871H3.49529H3.46209H3.42912H3.39639H3.36388H3.33159H3.29954H3.26771H3.2361H3.20472H3.17356H3.14263H3.11191H3.08142H3.05115H3.0211H2.99127H2.96166H2.93226H2.90308H2.87412H2.84537H2.81684H2.78853H2.76042H2.73253H2.70486H2.67739H2.65013H2.62309H2.59625H2.56962H2.5432H2.51699H2.49098H2.46518H2.43959H2.4142H2.38901H2.36402H2.33924H2.31466H2.29028H2.2661H2.24212H2.21834H2.19475H2.17136H2.14817H2.12518H2.10238H2.07977H2.05736H2.03514H2.01312H1.99128H1.96964H1.94818H1.92692H1.90584H1.88495H1.86425H1.84374H1.82341H1.80326H1.78331H1.76353H1.74394H1.72453H1.7053H1.68625H1.66738H1.64869H1.63019H1.61185H1.5937H1.57572H1.55792H1.54029H1.52284H1.50556H1.50056Z"
              stroke="black"
            />
          </svg>
       
        </div>
          <p className={`faq-answer ${activeIndex === index ? 'faq-answer-active' : ''}`} id="faq-answer-id">
       {value.answer} 
            </p>
       
            </div>
        </>
        )}
        
        </div>
      
      </div>
    </>
  );
}
