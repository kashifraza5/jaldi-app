import Input from "../Input";


const UserData = () => {
    return (
      <div className="flex justify-center mt-[20px]">
        <div className="inter-font space-y-3">
          <div className="space-y-2">
            <p>Name</p>
            <Input className="py-2 w-[290px]" placeholder="Enter Your Name" />
          </div>
          <div className="space-y-2">
            <p>Email</p>
            <Input className="py-2 w-[290px]" placeholder="Enter Your Email" />
          </div>
  
          <div className="space-y-2">
            <p>Phone</p>
            <Input className="py-2 w-[290px]" placeholder="Enter Your Phone" />
          </div>
  
          <div className="space-y-2">
            <p>Contact</p>
            <Input className="py-2 w-[290px]" placeholder="Enter Your Contact" />
          </div>
        </div>
      </div>
    );
  };

  export default UserData