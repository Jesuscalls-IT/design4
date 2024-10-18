import React from 'react';
const pic2 = `${process.env.PUBLIC_URL}/pic7.png`

const DrPaulDhinakaran: React.FC = () => {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '20px auto',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '10px',
            backgroundColor: '#fff',
            fontFamily: 'Arial, sans-serif',
            textAlign:'justify'
          }}>
            <h2 style={{ color: '#7B1FA2' }}>Dr. Shilpa Dhinakaran</h2>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img 
                    src={pic2} 
                    alt="Dr. Paul Dhinakaran" 
                    style={{ width: '200px',height: '200px', borderRadius: '8px', marginRight: '1300px', marginTop:'30px' }} 
                />
            </div>
            <p>
            Shilpa is the "miracle child" of her parents, born on September 6th, 1995, after five years. Her parents are dental surgeons. Because of their efficiency and care, they are loved by all in their surroundings. She was a source of joy and inspiration to all in her class, quiet by nature and an introvert but had great potential. 
            </p>
            <br />
            <p>
            Right from her early childhood, her ambition was to become a doctor, so she went on to do her Bachelors in Medicine. Before her marriage, she worked in C.S.I. Bell Mission Hospital in Tirunelveli after completing her MBBS. Her zeal for her profession and compassion for her patients is a true gift from God. Her desire has always been the Medical Mission. Passion and perseverance have been her mottos, and she tries to imbibe this into the people she meets. Her values and virtues are based on the teachings of Christ.
            </p>
            <br />
            <p>
            She is now happily married to Samuel Dhinakaran, Vice Chairman of Jesus Calls. Dr. Shilpa and Samuel Dhinakaran are blessed with a darling child, Katelyn Anna Dhinakaran. She works as a medical officer at SEESHA Karunya Community Hospital, Coimbatore, and is also involved in the ministry along with her family. She and her family make their home in Chennai, India. She has also completed an MBA and is currently pursuing a Master of Surgery at a reputed medical institution in Chennai. Apart from her educational qualifications, she is an inspiring icon among women in India and abroad through the messages that she delivers through social media and television media. Her concern for social issues is clearly portrayed through the work she does in SEESHA. Not just that, she is also a public speaker, and Dr. Shilpa Dhinakaran delivered her first message on a public platform at the Bethesda Special Blessing Meeting, testifying of how she was led to give God the first place in her life that brought God’s favor upon her. Dr. Shilpa Dhinakaran also inspires the youth through the UTurn programs. She is the author of the book 'Lovely: Inside and Out' which expounds on the nine fruits of the Holy Spirit, inspiring the reader to become sensitive to the Holy Spirit's leading. She is a caring and loving person. She really adds value to the family of Dhinakarans.
            </p>
            <br />
           
<hr />
<br />
             {/* Social Media and Contact Section */}
        <div className="contact-section">
          <h3>Contact Information</h3>

          <ul className="social-media-links">
            <li>
              <strong>Instagram: </strong>
              <a href="https://www.instagram.com/pauldhinakaranofficial" target="_blank" rel="noopener noreferrer">
                https://www.instagram.com/pauldhinakaranofficial
              </a>
            </li>
           
            <li>
              <strong>Facebook: </strong>
              <a href="https://www.facebook.com/PaulDhinakaranOfficial" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/PaulDhinakaranOfficial
              </a>
            </li>
          </ul>
        </div>
        </div>
    );
};

export default DrPaulDhinakaran;
