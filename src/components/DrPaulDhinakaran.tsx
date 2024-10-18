import React from 'react';
const pic2 = `${process.env.PUBLIC_URL}/pic1.png`

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
            <h2 style={{ color: '#7B1FA2' }}>Dr. Paul Dhinakaran</h2>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img 
                    src={pic2} 
                    alt="Dr. Paul Dhinakaran" 
                    style={{ width: '200px',height: '200px', borderRadius: '8px', marginRight: '1300px', marginTop:'30px' }} 
                />
            </div>
            <p>
                Dr. Paul Dhinakaran was born to (Late) Dr. D.G.S. Dhinakaran and Mrs. Stella Dhinakaran on 4th September, 1962. 
                He graduated as a Gold Medalist from Loyola College, Chennai, with a Bachelor's degree in Physics, and went on to complete his MBA and then earned his Ph.D in Management at a very young age of 26. 
                He credits his spiritual transformation to his Godly parents - his father's prophetic guidance and mother's unswerving fasting and prayer for him. His wife Evangeline ministers by his side, powerfully with grace and compassion for the millions. Their three children, Samuel, Sharon and Stella Ramola pursue the same mission empowered with divine compassion. 
                They minister as a family, with the sole mission to ensure that no soul is lost.
            </p>
            <br />
            <p>
                Dr. Paul Dhinakaran, has been called by the Lord to convey the Lord's unfailing love to the broken hearted, through prayer and to raise young professionals in technology, as today's Daniels and Josephs. 
                He is also a friend of the poor and needy, caring for thousands of them and providing hope for their future. 
                His service to humanity has spanned 35 years. His heart's cry and mission in life is to turn everyone's sorrow into joy. His journey of faith began when he accepted the Lord Jesus as his personal Saviour in his 18th year and dedicated his life to serve the people. Empowered by God's love and grace, his mission has touched millions positively.
            </p>
            <br />
            <p>
            He heads The Jesus Calls Ministry of prayer as chairman where he, 
            along with his family and team, conduct Prayer Festivals across India, 
            having a profound impact on the gathering of up to 500,000 during each prayer festival. 
            About 100 Prayer Towers, across our Nation, have been established under his leadership where nearly 500,000 call for prayer each month, around the clock. Dr. Paul Dhinakaran has been led to pray for the President, Prime Minister and leaders of Governments in several countries including India. He also organizes 72 hours fasting prayer, uniting all churches and people from all backgrounds, to pray for God's will to be perfected in each election. 
            He has also established a 24-hour Prayer Tower in New Delhi, our National capital. It is situated across the Parliament in New Delhi to pray with burden for the will of God to be done in the Nation and Governments both central and states. Through his ministry, millions have experienced divine peace and well-being. Broken families have been rebuilt and each one has found a meaning in life. Nearly 50,000 prayer intercessors, from 12 countries have been trained personally by Dr. Paul Dhinakaran, to serve God by standing in the gap. The Jesus Calls TV ministry telecasts 400 programs a month, in 10 different languages across the globe, containing real life stories from people who have overcome their troubles through faith and prayer along with hope. Dr. Paul Dhinakaran and his family brings hope and encouragement to 10 million people through social media alone.
            </p>
            <br />
            <p>
            He is also the Chancellor of Karunya Institute of Technology in India, 
            founded in 1986 where 8000 students study Science and Technology, Engineering, Arts, Media, and Management courses. It is ranked among the first 50 Institutions in India. The university has also been accredited with the highest accreditation of A++ by NAAC.Nearly 27,000 have graduated with undergraduate, graduate and Ph.D degrees. The Institute is engaged in cutting edge research work in the areas of Food, Water, Health care and Energy, to solve the problems of humanity.
            </p>
            <br />
            <p>
            Dr. Paul was appointed by the Government of India as a member of the National Monitoring Committee for Minority Education and as a Governing Council member of the Education For Each, child program. 
            </p>
            <br />
            <p>Dr. Paul Dhinakaran established SEESHA (Samiti for Education Environment Social and Health Action) a humanitarian outreach mission to care for poor children; materially, morally, emotionally, physically, spiritually and educationally. SEESHA, also provides food, housing, medical services for widows, physically and mentally challenged children, the poor who have lost their homes through natural disasters and more.</p>
<br />
<hr />
<br />
             {/* Social Media and Contact Section */}
        <div className="contact-section">
          <h3>Contact Information</h3>
          <strong>
            You may write to Dr. Paul Dhinakaran for your prayer needs: <a href="mailto:paul@jesuscalls.org">paul@jesuscalls.org</a>
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

export default DrPaulDhinakaran;
