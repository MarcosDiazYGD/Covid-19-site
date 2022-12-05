import React from 'react';
import Header from '../components/Header';
import useApiResponse from '../hooks/useApiResponse';
import video1 from '../assets/video/covidWallPaper.mp4'
import { FormattedMessage } from 'react-intl';


const Home = () => {
  const [apiData] = useApiResponse();
  return (
    <>
      <Header
        video={video1}
        title={<FormattedMessage
          id='home-title'
          defaultMessage={'consult the informaton regarding covid-19 in diferentt'}
        />}
        description={<FormattedMessage
          id='home-description'
          defaultMessage={`The information shared on this website comes from the COVID TRACKING public API`}
        />} />

      <div className='Home'>
        <div className='home-texts'>

          <div className='home-history home'>
            <h2><FormattedMessage
              id='home-history-title'
              defaultMessage={'History'}
            /></h2>
            <p>
              <FormattedMessage
                id='home-history-text'
                defaultMessage={'In December 2019, a series of cases of hospitalized patients with a new illness characterized by pneumonia and respiratory failure, due to a new coronavirus (SARS-CoV-2), were reported in Hubei province, China. On February 11, 2020, the World Health Organization named this etiological agent as COVID-19 (Coronavirus Disease, 2019). Subsequently, and despite extensive containment measures, the disease has continued to advance to affect the rest of the countries of Asia, the Middle East and Europe. On March 11, COVID-19 was declared a pandemic at a global press conference by Tedros Adhanom Ghebreyesus, Director General of the World Health Organization.'}
              />
            </p>
          </div>

          <div className='home-symptoms home'>
            <h2 >Symptoms</h2>
            <div className='section-symptoms'>
              <div>
                <p>
                  <FormattedMessage
                    id='home-symptoms-TMC'
                    defaultMessage={'The most common symptoms are the following:'} />
                </p>

                <ul>
                  <li>
                    <FormattedMessage
                      id='home-symptoms-TMC-first'
                      defaultMessage={'fever'}
                    />
                  </li>
                  <li>
                    <FormattedMessage
                      id='home-symptoms-TMC-second'
                      defaultMessage={'cough'}
                    />
                  </li>
                  <li>
                    <FormattedMessage
                      id='home-symptoms-TMC-third'
                      defaultMessage={'fatigue'}
                    />
                  </li>
                  <li>
                    <FormattedMessage
                      id='home-symptoms-TMC-fourth'
                      defaultMessage={'Loss of taste or smell'}
                    />
                  </li>
                </ul>
              </div>

              <div>
                <p><FormattedMessage
                  id='home-symptoms-TLC'
                  defaultMessage={'The less common symptoms are the following:'}
                /></p>

                <ul>
                  <li>
                    <FormattedMessage
                      id='home-symptoms-TLC-first'
                      defaultMessage={'Throat pain'}
                    />
                  </li>
                  <li>
                    <FormattedMessage
                      id='home-symptoms-TLC-second'
                      defaultMessage={'Skin rash or discoloration of fingers or toes Red or irritated eyes'}
                    />
                  </li>
                  <li>
                    <FormattedMessage
                      id='home-symptoms-TLC-third'
                      defaultMessage={'Headache'}
                    />
                  </li>
                  <li>
                    <FormattedMessage
                      id='home-symptoms-TLC-fourth'
                      defaultMessage={'aches and pains'}
                    />
                  </li>
                  <li>
                    <FormattedMessage
                      id='home-symptoms-TLC-fifth'
                      defaultMessage={'diarrhea'}
                    />
                  </li>
                </ul>
              </div>

              <div>
                <p><FormattedMessage
                  id='home-symptoms-S'
                  defaultMessage={'Serious symptoms are as follows'}
                /></p>
                <ul>
                  <li><FormattedMessage
                    id='home-symptoms-S-first'
                    defaultMessage={'Difficulty breathing or dyspnea'}
                  /></li>
                  <li><FormattedMessage
                    id='home-symptoms-S-second'
                    defaultMessage={'Loss of mobility or speech or feeling confused'}
                  /></li>
                  <li><FormattedMessage
                    id='home-symptoms-S-third'
                    defaultMessage={'Chest pain'}
                  /></li>
                </ul>
              </div>
            </div>
          </div>

          <div className='home-whatShould home'>
            <h2 >
              <FormattedMessage
                id='home-whatShould-title'
                defaultMessage={'What should I do if I feel sick?'}
              />
            </h2>
            <p>
              <FormattedMessage 
                id='home-whatShould-first'
                
                defaultMessage={'Seek medical attention immediately if you have any of these severe symptoms. You should always call your doctor or health care center before going to the place in question.'}
              />
            </p>
            <p>
              <FormattedMessage 
              id='home-whatShould-second'
              defaultMessage={'It is recommended that people who suffer from mild symptoms and have a good general state of health confine themselves at home.'}/>
            </p>
            <p>
              <FormattedMessage 
              id='home-whatShould-third'
              defaultMessage={'On average, people who are infected start to show symptoms within 5 to 6 days of becoming infected, but it can take up to 14.'}/>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;