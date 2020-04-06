import React from 'react';
import propTypes from 'prop-types';

const App = () => {
  const profiles = [
    { name: "Taro", age: 21 },
    { name: "Nanako", age: 21 }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>I am {props.name}, and {props.age} years old.</div>
}
User.propTypes = {
  name: propTypes.string,
  age: propTypes.number.isRequired
}

export default App;
