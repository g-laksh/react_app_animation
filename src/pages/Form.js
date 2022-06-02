import React ,{useState} from 'react';
import Login from './Login';
import Signup from './Signup';
import Sucess from './Sucess';
const Form = () => {
  const [Submitted, setSubmitted] = useState(false);
  const submit = ( ) => {
    setSubmitted(true);
  };
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = ( ) => {
    setFormIsSubmitted(true);
  };
  
  return( <>
    <div class="row">
    <div class="column">
      {!formIsSubmitted ?
      <Signup submitForm= {submitForm}/>:<Sucess/>}
      </div>
      <div class="column">
      {!Submitted ?
      <Login submit= {submit} />:<Sucess/>}
      </div>
      </div>
      
      </>
  )
  
};

export default Form; 