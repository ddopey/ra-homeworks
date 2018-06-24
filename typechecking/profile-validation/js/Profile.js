'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

const birthdayPropType = (props, propName, componentName) => {
  let birthdayLine = props[propName];
  let isValid = (new Date(birthdayLine) < new Date()) &&
  (/^\d{4}-\d{2}-\d{2}$/.test(birthdayLine));
  if(!isValid) {
  return new Error(`Неверный параметр ${propName} в компоненте
  ${componentName}: параметр должен быть датой рождения в формате YYYY-MM-DD`);
  }
  return null;
}

const urlPropType = (props, propName, componentName) => {
  let profileUrl = props[propName];
  let isUrl = (typeof profileUrl === 'string') &&
  /^https:\/\/vk.com\/(id[0-9]+|[A-Za-z0-9_-]+)$/.test(profileUrl);
  if(!isUrl) {
  return new Error(`Неверный параметр ${propName} в компоненте
  ${componentName}: параметр должен быть адресом профиля`);
  }
  return null;
}

Profile.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  img: PropTypes.string,
  birthday: birthdayPropType,
  url: urlPropType 
}

Profile.defaultProps = {
  img: './images/profile.jpg'
}