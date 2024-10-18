import React from 'react';
const pic2 = `${process.env.PUBLIC_URL}/pic8.png`

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
            <h2 style={{ color: '#7B1FA2' }}>Stella Ramola</h2>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img 
                    src={pic2} 
                    alt="Dr. Paul Dhinakaran" 
                    style={{ width: '200px',height: '200px', borderRadius: '8px', marginRight: '1300px', marginTop:'30px' }} 
                />
            </div>
            <p>
            Mrs. Stella Ramola is a contemporary Christian singer, songwriter, TV show host, and digital content creator. She creates music, videos, and blogs for young people to enjoy God’s love, find purpose and hang on to hope in the darkest times. Today, through social media and live events, she reaches over 300,000 people.
            </p>
            <br />
            <p>
            Stella was born and raised in Chennai, India, where she grew up in front of the camera. She is a great storyteller, bringing smiles to young hearts of all ages. Her game show, “Do You Know Your Bible?" aired on all regional television networks in Tamil Nadu, current streaming platforms, and online. This game show ran for 2 seasons and 21 episodes, leading the audience to play the same game at home with the infamous “Do You Know Your Bible?” card game.
            </p>
            <br />
            <p>
            When Stella’s new music drops, it’s usually the talk of the town as she integrates Indian culture with several genres. She released 5 albums with 10 million plays. Her first album release was at the age of 7, starting with Jesus Loves Me, Love Lifted Me, Heaven In My Heart, and Velicham Thedi's latest album, “Journey”. With her team of creative professionals, she is constantly pushing boundaries and challenging the way Christian music is made. Her fans love her for it and look up to her to represent Jesus in spite of the hurdles placed for a young woman in India. Stella has been featured in Rolling Stone, Faithfully Magazine, Voyage Dallas, and other popular magazines for her graceful grit to make meaningful music that touches the soul, heals the heart, and expands the mind.
            </p>
            <br />
            <p>
            In 2016, she went on a four-city tour in India, singing well-known Christian and gospel songs, encouraging young people to let loose, dance, and praise God in those concerts. She shared her testimony to over 2000 young people each night. She expressed that everyone has a unique purpose on this earth, and through the Holy Spirit, they can live out God’s plan no matter what struggles they go through. Because of her passion for music and marketing, Stella graduated with a bachelor of science in music business and a master of science in digital marketing from Full Sail University and serves full-time at Jesus Calls and UTurn.
            </p>
            <br />
            <p>
            n 2019, she created a YouTube channel, naming it the same as her highly interactive Instagram page, “Stellazlife.” In her spare time, she vlogs about her daily life. Her fun personality takes the viewers through her downtime doing devotionals, getting ready, spotting unique eats during her travels, and more importantly, being real on and off-camera. Her subscribers of more than 92,000 connect with her and share her love in getting closer to God through her blogs written on her personal site. She recently got married to Daniel Davidson, son of Pastor Joshua Stephen, on September 11, 2023. They have together released their debut song as a couple, which is titled ‘Aasirvatham’. The song has touched many thousands of people and they aspire to serve the Lord together through music as well as other forms of ministry. 
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
              <strong>YouTube: </strong>
              <a href="https://www.youtube.com/@pauldhinakaranofficial" target="_blank" rel="noopener noreferrer">
                www.youtube.com/@pauldhinakaranofficial
              </a>
            </li>
            <li>
              <strong>Facebook: </strong>
              <a href="https://www.facebook.com/PaulDhinakaranOfficial" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/PaulDhinakaranOfficial
              </a>
            </li>
            <li>
              <strong>Twitter: </strong>
              <a href="https://twitter.com/PaulDhinakaran" target="_blank" rel="noopener noreferrer">
                https://twitter.com/PaulDhinakaran
              </a>
            </li>
          </ul>
        </div>
        </div>
    );
};

export default DrPaulDhinakaran;
