import { useState, useEffect } from 'react';

const useForm = (callback, defaultValues={}) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert('You have submitted the form.')
    console.log(event.target.value,"12121212121")
   if(event.target.text.value==""){
    return alert('You have submitted empty form please fill the input.')
   }
    callback(values);
    event.target.reset();
    event.target.text.focus();
  };

  const handleChange = (event) => {
    event.persist();

    let { name, value } = event.target;
    if (parseInt(value)) {
      value = parseInt(value);
    }

    setValues(values => ({ ...values, [name]: value }));
  };

  useEffect( () => {
    setValues( defaultValues );
  }, [defaultValues]);

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;
