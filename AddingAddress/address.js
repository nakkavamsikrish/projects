const AddressDetails = ({
  errors,
  details,
  addressName,
  setCountryError
}) => {
  const handleEvent = func => event => {
    const { name, value } = event.target;
    const newDetails = JSON.parse(JSON.stringify(details));
    if (name === "country") {
      newDetails.countryCode = getCountryCodeByName(value);
    }
    newDetails[name] = value;
    func({
      target: {
        name: addressName,
        subname: name,
        value: newDetails
      }
    });
  };

 
 const handleCountrySelect = value => {
    // const newDetails = JSON.parse(JSON.stringify(details));
    // newDetails.country = value;
    // newDetails.countryCode = getCountryCodeByName(value);

    handleChange({
      target: {
        name: "country",
        value
      }
    });
  };

  const addressNameDisplay =
    addressName[0].toUpperCase() +
    addressName
      .substr(1)
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .toLowerCase();

  return (
    <>
      {addressName !== "Myaddress" ? (
        <address
          name={addressName}
     
        />
      ) : null}
      <CountryAutocomplete
        key={`${details.country}`}
        value={details.country}
        onCountrySelect={(evt, value) => {
          if (value) {
            handleCountrySelect(value.name);
          }
        }}
        onValidation={setCountryError}
      />
      <FormInput
        value={details.street}
        name="street"
        errors={errors}  
      />
      <FormInput
        value={details.suburb}
        name="suburb"
        errors={errors}
      />
      <FormInput
        value={details.town}
        name="town"
        errors={errors}
      />
      <FormInput
       value={details.postcode}
        name="postcode"
        errors={errors}
      />
    </>
  );
};
AddressDetails.defaultProps = {
  errors: {},
  clicked: {},
  setCountryError: () => {}
};
AddressDetails.propTypes = {
  addressName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    street: PropTypes.string,
    suburb: PropTypes.string,
    town: PropTypes.string,
    postcode: PropTypes.string,
    country: PropTypes.string
  })
}
export default AddressDetails;


let port = ""; //need to provide db details
app.listen(port, function(){
     console.log("server started listening at localhost:" + port)

});
