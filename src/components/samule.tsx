import React from 'react';
const pic2 = `${process.env.PUBLIC_URL}/pic6.png`;

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
            <h2 style={{ color: '#7B1FA2' }}>Samuel Dhinakaran</h2>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img 
                    src={pic2} 
                    alt="Dr. Paul Dhinakaran" 
                    style={{ width: '200px',height: '200px', borderRadius: '8px', marginRight: '1300px', marginTop:'30px' }} 
                />
            </div>
            <p>
                Samuel Dhinakaran is an anointed man of God, ministering among the youth of India and around the world. He has completely dedicated his life to serving God and His people. Over the past years, Samuel has come a long way ministering alongside his family, displaying his gifts and talents for the glory of God. During his early days, he ministered to little children and was elevated to nurture young minds during his teenage years. Undeterred from God’s ministry, he pursued his B.Tech. in India and an MBA from the University of Texas. He currently serves as Vice Chairman, of the Jesus Calls Ministry, Associate President-Youth in the world-renowned global ministry Jesus Calls, which has prayer towers in 12 countries, and Trustee, of Karunya Institute of Technology & Sciences. He is the leader of UTurn, a youth ministry that aims to inculcate a holy and blameless lifestyle that glorifies God by adhering to His word and being anointed by the Holy Spirit, according to Philippians 2:15. Hundreds and thousands of people gather for his meetings to receive comfort, healing, and deliverance. Over 80,000 youngsters thronged to hear the Word of God shared by Bro. Samuel, at Gujarat. Samuel has delivered the comforting Word of God to a gathering of over 400,000 people in a meeting held in Rourkela, Odisha. His meetings draw an average crowd of 100,000 people and 4000 youth. He is a worship leader, a preacher, a prayer intercessor, and an administrator. Several of his music albums in various languages have been an all-time favorite to many people around the world. Samuel Dhinakaran is widely known to the world through his television ministry, as he has been consistent on television ever since the early age of 4. His unwavering involvement in God’s ministry since his childhood has gained a great reputation among millions of people. He continues his vision of drawing young people to the love of God through crusades, campaigns, television ministry, and social media. Just as his father and grandfather, Samuel Dhinakaran, preceded his ministry tirelessly with great self-sacrifices. His challenge to young people is that they can live a holy life dedicated to God and taste real happiness and power to excel to their heights in their life's purpose.
            </p>
            
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
