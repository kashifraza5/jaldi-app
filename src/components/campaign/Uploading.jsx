import { useRef } from "react";
import { FiUpload } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const Uploading = () => {
    const fileInputRef = useRef(null);
  
    const handleClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
  
    return (
      <div
        className="flex mx-auto mt-[150px] cursor-pointer justify-between px-5 inter-font items-center w-[35vw] h-[10vh] bg-slate-300"
        onClick={handleClick}
      >
        <div>
          <FiUpload className="w-6 h-6 text-slate-700" />
        </div>
  
        <div>Select Your CSV file to upload</div>
  
        <Button className="bg-slate-900">Browse</Button>
  
        <input
          type="file"
          accept=".csv"
          ref={fileInputRef}
          style={{ display: "none" }} // Hide the file input element
          onChange={(e) => {
            const file = e.target.files[0];
            if (file) {
              console.log("Selected file:", file);
              // Handle the file upload here
            }
          }}
        />
      </div>
    );
  };

  export default Uploading;