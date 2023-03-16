import React, { useState } from 'react'

const About = () => {

    const [isEnglish, setIsEnglish] = useState(true);
    const [englishText, setEnglishText] = useState('');
    const [hindiText, setHindiText] = useState('');
  
    const handleTranslate = () => {
      if (isEnglish) {
        setHindiText();
      } else {
        setEnglishText();
      }
      setIsEnglish(!isEnglish);
    };

  return (
    <div className='grid grid-cols-4'>
      <div className='bg-[#f5eeee76] p-6 rounded-md m-6 leading-normal'>
      <h1 className='font-bold text-lg pt-6 mt-10 mb-4'>Message From Head</h1>
      <img src={require('../assests/Dr. Srivari Chandrasekhar.jpg')} alt="Head" />
      <span className='font-semibold'>Dr. Srivari Chandrasekhar</span>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nemo commodi! Optio, sed nesciunt! Similique rerum maxime ducimus incidunt! Rerum aspernatur quas minima facilis?</p>
      </div>
      <div className=' col-span-2 bg-[#f5eeee76] p-6 rounded-md m-6 leading-normal'>
      <button onClick={handleTranslate} className='bg-blue-700 rounded-sm p-2 text-white float-right mr-6 mt-2' >हिंदी/English</button>
      {isEnglish ? (
        <div className='english'>
      <h1 className='font-bold text-lg pt-6 mt-10 mb-4'>Welcome To <br /> National Institute for Geo-Informatics Science and Technology</h1>
      <p>Survey of India, the National Mapping organization was established in 1767. In the last two and
            a quarter
            centuries the entire country has been mapped with utmost dedication and hard work by a distinguished line of
            surveyors.</p>

          <p> Post-independence India, the developmental activities and need for defence preparedness brought urgent
            need to impart training to officers and staff in various aspects of surveying and mapping with state-of-the
            art technologies. With this objective, the Centre for Survey Training and Map Production was established at
            Hyderabad in 1967 with a Human Resource Development Institute within Survey of India under technical
            assistance from United Nations Development Programme (UNDP). The IIS&M, recently renamed as Indian Institute
            of Surveying & Mapping (IIS&M) thus raised on 6th May, 1967 is now recognized as the prestigious training
            institute established in the field of Surveying and Cartography to impart training to the Officers and the
            Staff of Survey of India and other Government Organisations, Private Individuals, and Scholars from other
            Afro-Asian countries.</p>

          <p>The other directorates of Survey of India located within the complex, viz.., AP Geo-spatial Data Centre,
            Southern Printing Group and GIS & Remote Sensing Directorate are rendering faculty assistance as and when
            required. Besides, the Institute engages experts fom external sources especially in the field of management
            and remote sensing, for the faculty support.</p>

          <p>The Institute also conducts M.Tech (Geomatics) and M.Sc. (Geospatial Science) Academic two year Post
            Graduate Programme in collaboration with Jawaharlal Nehru Technical University, Hyderabad. Many students of
            earlier batches have been absorbed in various scientific organisations.</p>

          <p>The facilities of the Institute Library, abounding in authentic books on Surveying, Cartography and various
            allied subjects are available to all trainees. Internet facility is available in the library, thus
            facilitating access for the trainees and faculty to the resources available in the electronic media.
            Furnished hostels for trainees with boarding facilities are situated in the campus which is sprawling, lush
            green; and the undulating terrain endowed with flora and fauna is delightful for a person with an eye for
            surveying.</p>
            <button className=' bg-blue-500 p-2 m-3 rounded-md'>Click to View Structure of NIGST</button>
      </div>
      ) : (
        <div className='hindi leading-relaxed'>
     <h1 className='font-bold text-lg pt-6 mt-10 mb-4'>राष्ट्रीय भू-सूचना विज्ञान विज्ञान और प्रौद्योगिकी संस्थान में आपका स्वागत है</h1>
     <p>भारत का सर्वेक्षण, राष्ट्रीय मानचित्रण संगठन की स्थापना 1767 में हुई थी। पिछले दो और
            एक चौथाई
            सदियों से पूरे देश की एक विशिष्ट पंक्ति द्वारा अत्यंत समर्पण और कड़ी मेहनत के साथ मानचित्रण किया गया है
            सर्वेक्षक।</p>

          <p> स्वतंत्रता के बाद भारत, विकासात्मक गतिविधियों और रक्षा तैयारियों की आवश्यकता तत्काल लाया
            राज्य की स्थिति के साथ सर्वेक्षण और मानचित्रण के विभिन्न पहलुओं में अधिकारियों और कर्मचारियों को प्रशिक्षण
            देने की आवश्यकता है
            कला प्रौद्योगिकियां। इस उद्देश्य के साथ, सर्वेक्षण प्रशिक्षण और मानचित्र उत्पादन केंद्र की स्थापना की गई थी
            1967 में तकनीकी के तहत भारत के सर्वेक्षण के भीतर एक मानव संसाधन विकास संस्थान के साथ हैदराबाद
            संयुक्त राष्ट्र विकास कार्यक्रम (यूएनडीपी) से सहायता। IIS&M, का हाल ही में नाम बदलकर भारतीय संस्थान कर दिया
            गया है
            इस प्रकार 6 मई, 1967 को उठाए गए सर्वेक्षण और मानचित्रण (IIS&M) की संख्या को अब प्रतिष्ठित प्रशिक्षण के रूप
            में मान्यता दी गई है।
            अधिकारियों और अधिकारियों को प्रशिक्षण देने के लिए सर्वेक्षण और नक्शानवीसी के क्षेत्र में स्थापित संस्थान
            सर्वे ऑफ इंडिया और अन्य सरकारी संगठनों के कर्मचारी, निजी व्यक्ति और अन्य से विद्वान
            एफ्रो-एशियाई देश।</p>

          <p>परिसर के भीतर स्थित भारतीय सर्वेक्षण विभाग के अन्य निदेशालय, जैसे.., एपी भू-स्थानिक डेटा केंद्र,
            सदर्न प्रिंटिंग ग्रुप और जीआईएस और रिमोट सेंसिंग निदेशालय फैकल्टी सहायता प्रदान कर रहे हैं
            आवश्यक। इसके अलावा, संस्थान विशेष रूप से प्रबंधन के क्षेत्र में बाहरी स्रोतों से विशेषज्ञों को नियुक्त करता
            है
            और रिमोट सेंसिंग, फैकल्टी सपोर्ट के लिए।</p>

          <p>संस्थान एम.टेक (जियोमैटिक्स) और एम.एससी भी आयोजित करता है। (जियोस्पेशियल साइंस) अकादमिक दो साल का पोस्ट
            जवाहरलाल नेहरू तकनीकी विश्वविद्यालय, हैदराबाद के सहयोग से स्नातक कार्यक्रम। के कई छात्र
            पहले के बैचों को विभिन्न वैज्ञानिक संगठनों में समाहित किया गया है।</p>

          <p>संस्थान पुस्तकालय की सुविधाएं, सर्वेक्षण, कार्टोग्राफी और विभिन्न पर प्रामाणिक पुस्तकों में प्रचुर मात्रा
            में
            संबद्ध विषय सभी प्रशिक्षुओं के लिए उपलब्ध हैं। इस प्रकार पुस्तकालय में इंटरनेट सुविधा उपलब्ध है
            इलेक्ट्रॉनिक मीडिया में उपलब्ध संसाधनों तक प्रशिक्षुओं और संकाय की पहुंच को सुगम बनाना।
            बोर्डिंग सुविधाओं के साथ प्रशिक्षुओं के लिए सुसज्जित छात्रावास परिसर में स्थित हैं जो विशाल, हरे-भरे हैं
            हरा; और वनस्पतियों और जीवों से संपन्न उबड़-खाबड़ इलाका किसी व्यक्ति के लिए आनंददायक है
            सर्वेक्षण।</p>
            <button className='bg-blue-500 p-2 m-3 rounded-md' >Click to View Structure of NIGST</button>
     </div>
      )}
     
    
      </div>
      <div className='bg-[#f5eeee76] p-6 rounded-md m-6'>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque et voluptatum incidunt culpa voluptatem blanditiis qui saepe, omnis officia id vitae, eos odit!</p>
      </div>
    </div>
  )
}

export default About
