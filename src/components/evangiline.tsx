import React from 'react';
const pic1 = `${process.env.PUBLIC_URL}/pic2.png`

const evangiline: React.FC = () => {
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
            <h2 style={{ color: '#7B1FA2' }}>Mrs. Evangeline Paul Dhinakaran</h2>
            <div style={{ textAlign: 'justify', marginBottom: '20px' }}>
            <img 
                    src={pic1} 
                    alt="Dr. Paul Dhinakaran" 
                    style={{ width: '200px',height: '200px', borderRadius: '8px', marginRight: '1300px', marginTop:'30px' }} 
                />
            </div>
            <p>
            A soft spoken, timid young girl (Evangeline) became a part of the family of Dhinakarans through her marriage to Dr. Paul Dhinakaran on 2nd of June 1989. Born on April 24, 1968, Evangeline is a perfect gift and treasure according to God's plan in the life of Dr. Paul Dhinakaran.
            </p>
            <br />
            <p>
            Today, she stands as a mighty servant of God before lakhs of people, roaring and bringing God's mighty presence and power through prayer. Whenever she prays, the Spirit of God moves in a mighty way and thousands of people are filled with the power of God and receive gifts of the Holy Spirit. She started her ministry in a very innocent way among the youth and later on was the Editor of True Friend, a magazine especially meant for the youngsters. God expanded the boundaries of her ministry, and now she preaches the word of God in Public Prayer Festivals where 300,000 to 500,000 people gather. She ministers in all the key Jesus Calls meetings and especially to the families and women through the Family Blessing Meetings.
            </p>
            <br />
            <p>
            By the grace of God, many are witnessing mighty miracles and deliverance from bondage and sickness in her ministry. Many who have been oppressed from the evil spirit are delivered during her prayer time. Broken families are united. Young men and women open their hearts to Jesus in their lives, hearing her messages.
            </p>
            <br />
            <p>
            Just at the onset of the Corona Pandemic in 2020, God gave her a burden to start Trumpet Prayer Group TPG mainly to intercede for the needs and protection of the ministry and for the people in need. Till today TPG is going strong with 1000s  joining every noon to pray.
            </p>
            <br />
<hr />
<br />
             {/* Social Media and Contact Section */}
        <div className="contact-section">
          <h3>Contact Information</h3>
          <strong>
            You may write to Sis Evangeline Paul Dhinakaran for your prayer needs: <a href="mailto:paul@jesuscalls.org">paul@jesuscalls.org</a>
          </strong>

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

export default evangiline;
