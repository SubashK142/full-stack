import { Animation, Button } from 'rsuite';
import UserProfileCard from './Profile';
import React from 'react';
const Panel = React.forwardRef((props, ref) => (
  <div
    {...props}
    ref={ref}
    style={{width:'1400px' }}
  >
    <UserProfileCard/>
  </div>
));

const Profile = () => {
  const [show, setShow] = React.useState(true);
  const onChange = () => setShow(!show);
  return (
    <div className="row" >
      <Button onClick={onChange} style={{width:'10%'}}>fade</Button>
      
      <Animation.Fade in={show}>{(props, ref) => <Panel {...props} ref={ref} />}</Animation.Fade>
    </div>
  );
};

export default Profile

