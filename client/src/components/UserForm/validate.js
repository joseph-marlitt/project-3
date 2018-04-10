const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = 'Required';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    }
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid Email Address';
    }
    if (!values.phone) {
      errors.phone = 'Required';
    } else if (!/^(\([0-9]{3}\)\s*|[0-9]{3})[0-9]{3}-[0-9]{4}$/.test(values.phone)) {
      errors.phone = 'Invalid Phone Number';
    }
    if (!values.rent) {
      errors.rent = 'Required';
    }
    if (!values.rooms) {
      errors.rooms = 'Required';
    }
    if (!values.baths) {
      errors.baths = 'Required';
    }
    return errors;
  };

  export default validate;
