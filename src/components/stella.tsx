import React from 'react';
const pic2 = `${process.env.PUBLIC_URL}/pic5.png`

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
            <h2 style={{ color: '#7B1FA2' }}>Stella Dhinakaran</h2>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img 
                    src={pic2} 
                    alt="Dr. Paul Dhinakaran" 
                    style={{ width: '200px',height: '200px', borderRadius: '8px', marginRight: '1300px', marginTop:'30px' }} 
                />
            </div>
            <p>
            She was chosen by God for a divine purpose. She was united in Holy Matrimony to the young man D.G.S. Dhinakaran, who was working in a bank. This God fearing couple started building their family life on prayer. They had to go through a lot of pain and suffering in their early stages of marriage as they lost the precious gift of their child on two occasions. She along with her husband continued to hold on to God and prayed for the gift of a child. God blessed them with a beautiful boy baby on 4th of September 1962 and later a baby girl on 4th Nov 1969.
            </p>
            <br />
            <p>
            In the early days of their ministry, she supported her husband Dr. D.G.S. Dhinakaran by caring & serving the pastors and people who came to meet him. She was faithful in this God given responsibility. God filled her with the Holy Spirit and transformed the timid person to a bold woman of prayer, like Esther and Deborah. She became a comforter of women and built thousands of families through her prayers and words of encouragement from the scriptures. As the ministry grew, she supported Dr. D.G.S. Dhinakaran by replying to hundreds of people who wrote to him and through her fervent prayers for them. She has written many books such as Priceless Pearl, A family life united with Christ, I Saw Him, The Divine Comforter and many more. Her books have received a huge welcome among women and testimonies pile up about how they are blessed through her books.
            </p>
            <br />
            <p>
            After the sudden and tragic death of her only daughter; Angel, Holy Spirit put a burden in her heart to gather few women to pray for other perishing women. Thus the ministry of Esther Prayer Group was born in 1988. Now there are 1000s of EGGs all over India and in other countries too. God has enabled Sis. Stella Dhinakaran to start Young Esther Prayer Group (YEPG) to pray for young women, Junior Esther Prayer Group (JEPG) to pray for youth people and Couple Esther Prayer Group (CEPG) to pray for couples. Even at this old age, she continues to be on the fire of the Lord. 
            </p>
            <br />
<hr />
<br />
             {/* Social Media and Contact Section */}
        <div className="contact-section">
          <h3>Contact Information</h3>
            <li>
              <strong>Facebook: </strong>
              <a href="https://www.facebook.com/PaulDhinakaranOfficial" target="_blank" rel="noopener noreferrer">
                https://www.facebook.com/PaulDhinakaranOfficial
              </a>
            </li>
        </div>
        </div>
    );
};

export default DrPaulDhinakaran;
