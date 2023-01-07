import { PropTypes } from 'prop-types';
import AQILabel from './AQILabel';
import AQITable from './AQITable';

const AQI = (props) => {
  const { aqiData, location } = props;
  let coordinates = '';
  let locationName = '';
  let locationState = '';
  let country = '';
  let components = '';
  let aqi = '';
  if (aqiData !== null && location !== null) {
    coordinates = `\u00A0\u00A0\u00A0\u00A0${aqiData.coord.lat}°,\u00A0\u00A0\u00A0\u00A0${aqiData.coord.lon}°`;
    locationName = location[0].name;
    locationState = location[0].state;
    country = location[0].country;
    components = aqiData.list[0].components;
    aqi = aqiData.list[0].main.aqi;
  }
  return (
    <div className="aqi-container">
      {aqiData ? (
        <div className="aqi-details">
          <h1 className="location-heading">
            {locationName}
            ,
            {locationState ? (
              <span>
                {' '}
                {locationState}
                ,
              </span>
            ) : ''}
            {' '}
            {country}
          </h1>
          <p className="location-para">
            coords :
            {coordinates}
          </p>
          {locationState ? (
            <p className="location-para">
              state :
              {' '}
              {locationState}
            </p>
          ) : ''}
          <p className="location-para">
            country code :
            {' '}
            {country}
          </p>
          <AQILabel aqi={aqi} />
          <AQITable components={components} />
        </div>
      ) : ''}

    </div>
  );
};
AQI.defaultProps = {
  aqiData: null,
  location: null,
};
AQI.propTypes = {
  aqiData: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired),
  location: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string, PropTypes.object)),
};
export default AQI;
