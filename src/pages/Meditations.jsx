import MeditationCard from '../components/MeditationCard';
import mediLinks from '../data/medi-links';
import { Carousel } from 'antd';
import { DesktopView, MobileView } from 'react-device-detector';
import './Meditations.css';

function Meditations() {

  return (
    <div className='meditations'>
      <div className="meditations--title card">
        <h2>MEDITACIONES</h2>
      </div>
        <DesktopView>
          <div className="meditations--content meditations--desktop card">
            {mediLinks.map((elem, key) => {
              return <MeditationCard props={elem} key={key} />;
            })}
          </div>
        </DesktopView>
        <MobileView>
          <div className="meditations--content card">
            <Carousel arrows dotPosition='top' infinite >
              {mediLinks.map((elem, key) => {
                return <MeditationCard props={elem} key={key} />;
              })}
            </Carousel>
          </div>
        </MobileView>
    </div>
  );
}

export default Meditations
