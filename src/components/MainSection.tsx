import React from 'react';
import './MainSection.css'; // Import the CSS file
const pic = `${process.env.PUBLIC_URL}/pic.png`;

const MainSection: React.FC = () => {
  return (
    <div className="main-container">
      {/* Header Section */}
      <h1 className="main-title">Jesus Calls</h1>

      {/* Content Section */}
      <div className="content-section">
        {/* Left Image Section */}
        <div className="image-selection">
          <img src={pic} alt="Jesus Calls Family" />
        </div>

        {/* Right Text Section */}
        <div className="text-selection">
          <h2 className="subtitle">Who are we?</h2>
          <p>
            Prayer, love and compassion are key components in the Jesus Calls ministry.
            All the endeavors of Jesus Calls portray these major dynamics. The uniqueness
            of this global ministry is that Dr. Paul Dhinakaran and his entire family minister
            together with various people groups without regard to nationality, ethnicity, or 
            socio-economic status. As a result, Jesus Calls necessitates a multi-faceted approach 
            to a ministry that extends to men, women, youth, children, families, sick, the poor and needy.
          </p>
          <p>
            In answer to the cry of millions, as found in Psalm 69:20, "Reproach has broken my heart, 
            And I am full of heaviness; I looked for someone to take pity, but there was none; And for 
            comforters, but I found none." Jesus Calls provides hope and comfort to broken-hearted people 
            by weeping with those who weep and mourning with those who mourn in accordance with what Jesus 
            has said: that if two agree together in His name on earth, it’ll be done by His father in heaven.
          </p>
          <p className="italic-text">
            This mission is fulfilled through the Prayer Towers, Prayer Festivals, magazines, broadcast, and digital media.
          </p>
        </div>
      </div>

      {/* Additional Section */}
      <div className="mission-section">
        <h2>Mission, Vision and Biblical Foundation</h2>

        <h3>Mission Statement</h3>
        <p>
          Jesus Calls’ mission and purpose is to exalt our Lord Jesus Christ and heal the brokenhearted 
          that their sorrows may turn into joy.
        </p>

        <h3>Vision Statement</h3>
        <p>
          We accomplish our mission through the operation of the Jesus Calls Prayer Towers all over India 
          in about 100 locations where intercessory prayer is offered 24 hours a day. Jesus Calls also conducts 
          public prayer festivals and broadcasts its message through the media in order to see people forever 
          changed through the love and compassion of Jesus Christ. It is the dream of the Dhinakarans that 
          “not one soul would be lost.”
        </p>

        <h3>Biblical Foundation</h3>
        <p>
          “Therefore go make disciples of all nations, baptizing them in the Name of the Father, and of the Son, 
          and of the Holy Spirit, and teaching them to obey everything I have commanded you. And surely I am with you 
          always, to the end of the age” (Matthew 28:19-20).
        </p>
        <div className="history-section">
          <h3>How It All Began</h3>
          <p>
            In 1962, late Dr. D.G.S Dhinakaran, at the age of 27, had a vision of Christ for nearly three hours, 
            wherein He spoke to Him face to face. Jesus told him that during His sojourn on earth, when He saw the 
            sick, the lonely, the despised and the castaways, He was moved with compassion and laid hands upon them, 
            embracing them and speaking words of grace and comfort, healing each one of them through the compassion 
            that flowed out of Him. He said, “Dhinakaran, I’m transforming your heart to overflow with my love and 
            compassion. From now on, when you hear the people narrate their sufferings to you, you will not condemn 
            nor judge them but will begin to cry for them unto me. And when you cry, I, Jesus will come, see your 
            tears and wipe away their tears.” This has been the mission of Jesus Calls since then.
          </p>

          <p>
            The Lord, then, allowed the family of the Dhinakarans to go through many tribulations, personal losses 
            and pain, including sickness unto death, poverty, uncharitable criticisms, financial tribulations, oppression 
            and even the loss of Dr. D.G.S. Dhinakaran and Mrs. Stella Dhinakaran’s daughter, Evangeline, through a 
            cruel car accident at a tender age of 17. It has been these heart-breaking experiences in life wherein the 
            family experienced the resurrection and comfort through the spirit of Jesus which led them to minister to the 
            broken-hearted people. Since 1970, when the first public Prayer Festival was conducted in Vellore, the name 
            Jesus Calls was given to the ministry by the organizers of the Prayer Festival in the city of Erode, Tamil Nadu.
          </p>

          <p>
            In 1980, at the age of 18, Dr. Paul Dhinakaran, the son of Dr. D.G.S. Dhinakaran & Mrs. Stella Dhinakaran 
            joined his parents in ministry and today leads the organization along with being the chancellor of Karunya University 
            (deemed) and the founder of SEESHA, a humanitarian foundation. He married Evangeline and together they have three children, 
            Samuel, Sharon, and Stella. Samuel is married to Shilpa.
          </p>

          <h3>Prayer Festivals</h3>
          <p>
            Mass hope-giving rallies, known as Prayer Festivals, are held to pray for the needs of the people, 
            proclaiming the message that God would turn one’s sorrow into joy when one comes to Him. These Prayer Festivals 
            are organized by a committee comprising all the churches and in some cases, a representative of the ruling government 
            of that state. Dr. Paul Dhinakaran and his family are invited by them to minister in those Festivals which are normally 
            conducted for three days in that city. There have been attendances of up to 500,000 people per evening of each of the 
            Festivals, especially in northern parts of India. These Prayer Festivals are telecast live on commercial television 
            channels across the nations, through social media and on the website to reach a few million people at the same time.
          </p>

          <h3>Prayer Towers</h3>
          <p>
            Prayer Towers are centers of prayer established in various cities across the nation of India. People who are broken 
            because of life’s problems, walk in and are received by a prayer intercessor who counsels them from the scripture and prays 
            with them. Marvelous transformations such as freedom from addictions, deliverance from family problems, and physical suffering 
            have been reported as the prayer life has change to trust in God and lead a righteous and healthy lifestyle. Today, more than 
            100 Prayer Towers function in this manner.
          </p>

          <p>
            A National Prayer Tower has been established in New Delhi just across the Parliament of India, with the president’s office 
            in direct view. Prayer intercessors come from across the nation of India and pray from the 5th floor of this Prayer Tower 
            looking at the Parliament, maintaining a 24-hour chain, all the 365 days of the year, praying unto God for His will to be 
            perfected in the life of each citizen in the nation as well as in the affairs of the government.
          </p>

          <p>
            People call the Prayer Towers 24/7. The calls are received by the prayer intercessors and prayer services are offered 
            in 12 language groups.
          </p>

          <h3>UTURN</h3>
            <p>
            The youth ministry of Jesus Calls is dedicated to serve young people and help them shine like stars in this world. UTurn hosts Clubs every month in local Prayer Towers, music concerts, TV programs, interaction on social media and one on one counseling. It also operates a 'Young Partners' Plan' which is for young partners from newly born children up until they grow up to their youth. As they support the ministry, which is a source to bless millions, prayers are offered by the prayer intercessors in the Prayer Towers each day for God to bless them according to 1 Chronicles 4:10.
            </p>

            <h3>BROADCAST MEDIA</h3>
            <p>
            The Jesus Calls television programs have reached millions of homes since 1985 in 13 languages with the gospel of hope and prayers for the needs of the people. Personal testimonies of life transforming experiences and answers to prayers have been telecast in these programs and have been a source of great comfort to the viewers. The viewers call the Prayer Towers for a personal prayer of commitment and share their prayer requests to someone who listens to them patiently and prays with them at their moment of need, portraying the love of Christ. These services are offered free.
            </p>

            <h3>DIGITAL MEDIA</h3>
            <p>
            The seekers have access to more than 80,000 hours of messages, prayers, music, answers to life's questions and problems, life stories, dramas and documentaries in 13 languages for them to be ministered to, across the world. Millions seek prayer through social media for which the scriptures and teachings are offered through each platform, such as the Jesus Calls website in multiple languages and various social media platforms. The platform also has enlisted thousands of volunteers to take time and pray for those in need, whom they would not even know as found in Job 42:10. Through this, a strong wave of prayer has been raised by the Dhinakarans across the world. Thousands upon thousands have had their lives transformed being empowered with compassion while hearing the agony and suffering of other people while praying for them.
            </p>

            <h3>CORRESPONDENCE</h3>
            <p>
            Nearly half a million prayer requests are sent to the Jesus Calls ministry each month seeking prayer, counsel and scriptural direction. Every prayer request is individually replied through postal letters, email, social media and personal prayers with verses and spiritual counsel, as per their need.
            </p>

            <h3>MAGAZINES & BOOKS</h3>
            <p>
            Magazines are sent to the partners each month through e-magazines and lately in digital mode which are published through the website. It contains messages for each member of the family, articles for various occasions, prayer to be used for different needs, Bible devotional for the month, testimonies of the answers to prayer, training to serve in ministry and so on.
            Books too have been published in different languages ranging from inspirational reading to faith teaching, dwelling on supernatural experiences, prayer, prophetic guidance, family life, stories for children and youth life.
            Recently Dr Stella Dhinakaran has written a book called 'I saw Him', outlining the way in which God led her with the mission of Esther Prayer Group with lively testimonies; Dr Shilpa Samuel has written her maiden book 'Lovely Inside and Out' bringing out the 9 Fruit of the Spirit in practical manner.
            </p>

            <h3>SUPPORT TO CHURCHES & MINISTERS</h3>
            <p>
            Since 1955, Jesus Calls has been led through the late Dr. D.G.S. Dhinakaran offered one-tenths of its donation to other ministries to support their mission, to build their church buildings in pioneering areas, as well as, take care of the needy servants of God in frontier missions (Psalm 16:2). As a result of this, Jesus Calls has become a platform for all churches, ministries and missions to gather together to get more closer. Moreover, God has been gracious to keep the ministry free from debt and fully funded through the benevolence of the people of India.
            </p>

        </div>
      </div>
    </div>
  );
};

export default MainSection;
