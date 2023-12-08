import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Orders = () => {
  return (
    <>
      <div className="text-xl font-medium">Recent Orders</div>
      <div className="flex flex-col items-center justify-center p-6">
        <div className="flex items-center justify-center my-10">
          <div className="bg-[#f4f5fa] border border-gray-300 h-[11rem] w-[11rem] rounded-full flex items-center justify-center">
            <ShoppingBagOutlinedIcon
              style={{ fontSize: 80, color: "#9ca3af" }}
            />
          </div>
        </div>
        <div className="text-center mb-6 space-y-3">
          <div className="text-xl font-medium ">No Orders Yet?</div>
          <div className="text-gray-500 font-normal">
            Add products to your store and start<br/> selling to see orders here.
          </div>
        </div>
        <button className="bg-[#d23766] text-white px-4 py-2 rounded-xl flex items-center">
          <FavoriteBorderIcon className="mr-2" /> {/* Use the MUI icon */}
          New Product
        </button>
      </div>
    </>
  );
};

export default Orders;
