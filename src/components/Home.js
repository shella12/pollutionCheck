import { useDispatch, useSelector } from 'react-redux';
import { getAqi } from '../redux/airquality/airquality';
import AQI from './AQI';
import InputLocation from './InputLocation';
import { getLocation } from '../redux/getLocation/getLocation';

const Home = () => {
  const dispatch = useDispatch();
  const aqiData = useSelector((state) => state.AqiSlice);
  const apilocation = useSelector((state) => state.LocationSlice);
  const inputLocation = (location) => {
    dispatch(getAqi(location));
    dispatch(getLocation(location));
  };

  return (
    <div>
      <InputLocation inputLocation={inputLocation} />
      <AQI
        aqiData={aqiData}
        location={apilocation}
      />
    </div>
  );
};
export default Home;
