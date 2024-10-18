import React from 'react';
const pic1 = `${process.env.PUBLIC_URL}/pic4.png`

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
            <h2 style={{ color: '#7B1FA2' }}>Dr. D.G.S. Dhinakaran</h2>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img 
                    src={pic1} 
                    alt="Dr. Paul Dhinakaran" 
                    style={{ width: '200px',height: '200px', borderRadius: '8px', marginRight: '1300px', marginTop:'30px' }} 
                />
            </div>
            <p>
            A young man depressed and unable to bear the anguish of poverty, sickness, unemployment, and failures in life, in an attempt to put an end to all his miseries, he walked towards the railway track to commit suicide. On the way, he met his uncle, who shared about the love and sacrifice of Jesus Christ for him. Those words served as a balm to his bruised heart. His uncle told him to go home and commit his ways to the Lord. He prayed, committed his life to the Savior, and returned home with newfound hope on February 11, 1955. The joy of salvation filled his heart. This young man was none other than the late Dr. D.G.S. Dhinakaran.
            </p>
            <br />
            <p>
            After this incident, he started seeking Christ fervently, reading the scriptures, and waiting in the presence of God for many hours. He did this diligently for seven long years - pleading, "Lord! Hear my prayer, and grant me your power! I don't want to live a dried-up Christian life anymore!" He wanted to have communion with God like the saints in the Bible had. On October 10, 1962, during a time of prayer with his family, a divine presence filled the room. He, indeed, saw Jesus Christ face to face, and he heard Him say, "I am Jesus. I have come to bless you." The Lord filled him with His Holy Spirit. He said, "Son, this world has only heard about my love and compassion. However, it has not been seen in a person's life. Today, I am filling you with the same spirit of compassion that I had when I was in this world two thousand years ago. Every time you are moved with this compassion, whatever you ask for my people, it shall be granted."
            </p>
            <br />
            <p>
            Dr. D.G.S. Dhinakaran was working in a bank, had a family, and also served people by praying for their needs and sharing the love of God. Though he started his mission on the streets for the broken-hearted and the needy, as more and more people began to throng to listen to him, he was taken to speak on public platforms to thousands. His mission to people was then named Jesus Calls. 
            </p>
            <br />
            <p>
            His life was not a bed of roses. During his marriage, his wife miscarried, followed by the delivery of a stillborn child. Criticism followed to break the spirit of Dhinakaran and his wife. Loneliness and forsakenness gripped them. It was followed by great financial troubles, and sickness gripped his body. His lungs failed; his eyes were affected; he went through vertigo; his kidneys failed; his heart stopped for an hour and a half; his legs failed. His wife, himself, and his 17-year-old daughter, Angel, while going to the airport to preach the gospel, met with an accident on the road, and his beloved daughter Angel died instantaneously, falling right into his lap. Again, a barrage of criticism followed. The pressure of serving the people through the ministry carries the whole financial load; the attacks from the ungodly people in the world wielding authority in the government, society, and spiritual circles terrorize him to stop his mission. The personal challenges to keep up his spirit and his family in the midst of all these oppressions. But through these circumstances, he would have divine visitations from the Lord telling him that only by going through these sufferings and sorrowful experiences, would he be able to receive the people who suffer with those problems with great compassion and pray with zeal to the Lord claiming the victories Jesus had won through the cross for them through His own suffering on the cross.
            </p>
            <br />
<hr />
<br />
            
        </div>
    );
};

export default evangiline;
