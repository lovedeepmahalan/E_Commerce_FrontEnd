const AddressCard = ({address}) => {
  return (
    <div className="text-left">
      <div className="space-y-3">
        <p className="font-semibold">{address?.firstName+" "+address?.lastName}</p>
        <p>{address?.state}, {address?.streetAddress},{address?.pinCode}</p>
        <div className="space-y-1">
          <p className="font-semibold">Phone Number</p>
          <p>9167459820</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
