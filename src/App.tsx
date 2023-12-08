import React from "react";
import { Dashboard } from "./screens/Dashboard";
import { SideBar } from "./screens/SideBar";

const App: React.FC = () => {
  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <SideBar />
        <main className="flex-grow overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </>
  );
};

export default App;
// import * as React from "react";
// import IconButton from "@mui/material/IconButton";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { Menu, MenuItem } from "@mui/material";
// import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
// import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
// import "../index.css";
// import { PieChart } from "../components/Pie";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import FolderOpenIcon from "@mui/icons-material/FolderOpen";
// import { HeaderComponent } from "../components/Header";

// const options = ["This week", "Last month", "Last year"];

// const ITEM_HEIGHT = 48;
// export const Dashboard = () => {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <>
//       <HeaderComponent />
//       <div className="flex flex-col gap-4 bg-[#f4f5fa] p-4">
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">
//           {/* first card */}
//           <div className=" flex flex-col flex-auto p-6 bg-card shadow overflow-hidden w-auto h-36 bg-white rounded-xl  card">
//             <div className="flex items-center justify-between">
//               <div className="text-lg font-medium tracking-tight leading-6 truncate icon">
//                 <img src="src\assets\Graph.png" alt="graph-icon" />
//               </div>
//               <div className="ml-2 -mt-2 -mr-3">
//                 <IconButton
//                   aria-label="more"
//                   id="long-button"
//                   aria-controls={open ? "long-menu" : undefined}
//                   aria-expanded={open ? "true" : undefined}
//                   aria-haspopup="true"
//                   onClick={handleClick}
//                 >
//                   <MoreVertIcon />
//                 </IconButton>
//                 <Menu
//                   id="long-menu"
//                   MenuListProps={{
//                     "aria-labelledby": "long-button",
//                   }}
//                   anchorEl={anchorEl}
//                   open={open}
//                   onClose={handleClose}
//                   PaperProps={{
//                     style: {
//                       maxHeight: ITEM_HEIGHT * 4.5,
//                       width: "20ch",
//                     },
//                   }}
//                 >
//                   {options.map((option) => (
//                     <MenuItem
//                       key={option}
//                       selected={option === "Pyxis"}
//                       onClick={handleClose}
//                     >
//                       {option}
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </div>
//             </div>
//             <div className="flex flex-row items-center justify-between mt-6 w-full">
//               <div className="flex flex-col items-start">
//                 <div className="text-lg  tracking-tight leading-none text-slate-400">
//                   Sales
//                 </div>
//                 <div className="flex flex-row items-center justify-between">
//                   <div className="text-lg font-medium">₦0.00</div>
//                   <div className="text-sm font-light text-lime-500 ml-2">
//                     +0.00%
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col items-baseline  justify-center text-secondary">
//                 <div className="text-lg  tracking-tight leading-none text-slate-400">
//                   Volume
//                 </div>
//                 <div className="ml-1.5 text-lg font-semibold">0</div>
//               </div>
//             </div>
//           </div>
//           {/* second card */}
//           <div className=" flex flex-col flex-auto p-6 bg-card shadow overflow-hidden w-auto h-36 bg-white rounded-xl  card">
//             <div className="flex items-center justify-between">
//               <div className="text-lg font-medium tracking-tight leading-6 truncate icon-team">
//                 <GroupOutlinedIcon />
//               </div>
//               <div className="ml-2 -mt-2 -mr-3">
//                 <IconButton
//                   aria-label="more"
//                   id="long-button"
//                   aria-controls={open ? "long-menu" : undefined}
//                   aria-expanded={open ? "true" : undefined}
//                   aria-haspopup="true"
//                   onClick={handleClick}
//                 >
//                   <MoreVertIcon />
//                 </IconButton>
//                 <Menu
//                   id="long-menu"
//                   MenuListProps={{
//                     "aria-labelledby": "long-button",
//                   }}
//                   anchorEl={anchorEl}
//                   open={open}
//                   onClose={handleClose}
//                   PaperProps={{
//                     style: {
//                       maxHeight: ITEM_HEIGHT * 4.5,
//                       width: "20ch",
//                     },
//                   }}
//                 >
//                   {options.map((option) => (
//                     <MenuItem
//                       key={option}
//                       selected={option === "Pyxis"}
//                       onClick={handleClose}
//                     >
//                       {option}
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </div>
//             </div>
//             <div className="flex flex-row items-center justify-between mt-6 w-full">
//               <div className="flex flex-col items-start">
//                 <div className="text-lg  tracking-tight leading-none text-slate-400">
//                   Costumers
//                 </div>
//                 <div className="flex flex-row items-center justify-between">
//                   <div className="text-lg font-medium">0</div>
//                   <div className="text-sm font-light text-lime-500 ml-2">
//                     +0.00%
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-col items-baseline justify-center   text-secondary">
//                 <div className="text-lg  tracking-tight leading-none text-slate-400">
//                   Active
//                 </div>
//                 <div className="flex flex-row items-center justify-between">
//                   <div className="text-lg font-medium">0</div>
//                   <div className="text-sm font-light text-lime-500 ml-2">
//                     +0.00%
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* third card */}
//           <div className=" col-span-2 lg:col-auto flex flex-col flex-auto p-6 bg-card shadow overflow-hidden bg-white rounded-xl  h-36 card lg:w-full">
//             <div className="flex items-center justify-between">
//               <div className="text-lg font-medium tracking-tight leading-6 truncate icon-team">
//                 <ShoppingBagOutlinedIcon />
//               </div>
//               <div className="ml-2 -mt-2 -mr-3">
//                 <IconButton
//                   aria-label="more"
//                   id="long-button"
//                   aria-controls={open ? "long-menu" : undefined}
//                   aria-expanded={open ? "true" : undefined}
//                   aria-haspopup="true"
//                   onClick={handleClick}
//                 >
//                   <MoreVertIcon />
//                 </IconButton>
//                 <Menu
//                   id="long-menu"
//                   MenuListProps={{
//                     "aria-labelledby": "long-button",
//                   }}
//                   anchorEl={anchorEl}
//                   open={open}
//                   onClose={handleClose}
//                   PaperProps={{
//                     style: {
//                       maxHeight: ITEM_HEIGHT * 4.5,
//                       width: "20ch",
//                     },
//                   }}
//                 >
//                   {options.map((option) => (
//                     <MenuItem
//                       key={option}
//                       selected={option === "Pyxis"}
//                       onClick={handleClose}
//                     >
//                       {option}
//                     </MenuItem>
//                   ))}
//                 </Menu>
//               </div>
//             </div>
//             <div className="flex flex-row items-center justify-between mt-6 w-full">
//               <div className="flex flex-col justify-between items-start">
//                 <div className="text-lg  tracking-tight leading-none text-slate-400">
//                   All Orders
//                 </div>
//                 <div className="flex flex-row items-center justify-between">
//                   <div className="text-lg font-medium">0</div>
//                 </div>
//               </div>

//               <div className="flex flex-col items-baseline justify-between   text-secondary">
//                 <div className="text-lg  tracking-tight leading-none text-slate-400">
//                   Pending
//                 </div>
//                 <div className="flex flex-row items-center justify-between">
//                   <div className="text-lg font-medium">0</div>
//                 </div>
//               </div>

//               <div className="flex flex-col items-baseline justify-between   text-secondary">
//                 <div className="text-lg  tracking-tight leading-none text-slate-400">
//                   Completed
//                 </div>
//                 <div className="flex flex-row items-center justify-between">
//                   <div className="text-lg font-medium">0</div>
//                   <div className="text-sm font-light text-lime-500 ml-2">
//                     +0.00%
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-4">
//           <div className="xl:col-span-1  lg:col-span-2 sm:col-span-3 h-auto p-6 bg-card shadow overflow-hidden w-auto bg-white rounded-xl  pie-card">
//             <PieChart />
//           </div>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-1  md:grid-cols-2 gap-4 w-full">
//             {/* four card */}
//             <div className=" p-6 bg-card shadow overflow-hidden w-auto h-auto  rounded-xl xl:col-span-1 lg:col-span-1 sm:col-span-1 card-bg">
//               <div className="flex flex-col justify-between">
//                 <div className="flex items-center justify-between">
//                   <div className="text-lg font-medium tracking-tight leading-6 truncate icon-team">
//                     <FolderOpenIcon style={{ color: "white" }} />
//                   </div>
//                   <div className="ml-2 -mt-2 -mr-3">
//                     <IconButton
//                       aria-label="more"
//                       id="long-button"
//                       aria-controls={open ? "long-menu" : undefined}
//                       aria-expanded={open ? "true" : undefined}
//                       aria-haspopup="true"
//                       onClick={handleClick}
//                     >
//                       <MoreVertIcon style={{ color: "white" }} />
//                     </IconButton>
//                     <Menu
//                       id="long-menu"
//                       MenuListProps={{
//                         "aria-labelledby": "long-button",
//                       }}
//                       anchorEl={anchorEl}
//                       open={open}
//                       onClose={handleClose}
//                       PaperProps={{
//                         style: {
//                           maxHeight: ITEM_HEIGHT * 4.5,
//                           width: "20ch",
//                         },
//                       }}
//                     >
//                       {options.map((option) => (
//                         <MenuItem
//                           key={option}
//                           selected={option === "Pyxis"}
//                           onClick={handleClose}
//                         >
//                           {option}
//                         </MenuItem>
//                       ))}
//                     </Menu>
//                   </div>
//                 </div>
//                 <div className="flex flex-row items-center justify-between mt-6 w-full space-y-4">
//                   <div className="flex flex-col items-baseline justify-center mt-3  text-secondary ">
//                     <div className="text-lg  tracking-tight leading-none text-slate-200">
//                       Costumers
//                     </div>
//                     <div className="flex flex-row items-center justify-between">
//                       <div className="text-lg text-white  font-medium">0</div>
//                       <div className="text-sm font-light text-white ml-2">
//                         +0.00%
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex flex-col items-baseline justify-center   text-secondary">
//                     <div className="text-lg  tracking-tight leading-none text-slate-200">
//                       Active
//                     </div>
//                     <div className="flex flex-row items-center justify-between">
//                       <div className="text-lg text-white font-medium">0</div>
//                       <div className="text-sm font-light text-white ml-2">
//                         +0.00%
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* five card */}
//             <div className=" p-6 bg-card shadow overflow-hidden w-auto h-auto bg-white rounded-xl xl:col-span-1 lg:col-span-1 sm:col-span-1 card">
//               <div className="flex flex-col justify-between h-auto">
//                 <div className="flex items-center justify-between">
//                   <div className="text-lg font-medium tracking-tight leading-6 truncate icon-team">
//                     <ShoppingCartOutlinedIcon />
//                   </div>
//                   <div className="ml-2 -mt-2 -mr-3">
//                     <IconButton
//                       aria-label="more"
//                       id="long-button"
//                       aria-controls={open ? "long-menu" : undefined}
//                       aria-expanded={open ? "true" : undefined}
//                       aria-haspopup="true"
//                       onClick={handleClick}
//                     >
//                       <MoreVertIcon />
//                     </IconButton>
//                     <Menu
//                       id="long-menu"
//                       MenuListProps={{
//                         "aria-labelledby": "long-button",
//                       }}
//                       anchorEl={anchorEl}
//                       open={open}
//                       onClose={handleClose}
//                       PaperProps={{
//                         style: {
//                           maxHeight: ITEM_HEIGHT * 4.5,
//                           width: "20ch",
//                         },
//                       }}
//                     >
//                       {options.map((option) => (
//                         <MenuItem
//                           key={option}
//                           selected={option === "Pyxis"}
//                           onClick={handleClose}
//                         >
//                           {option}
//                         </MenuItem>
//                       ))}
//                     </Menu>
//                   </div>
//                 </div>
//                 <div className="flex flex-row items-center justify-between mt-10 w-full">
//                   <div className="flex flex-col items-start">
//                     <div className="text-lg  tracking-tight leading-none text-slate-400">
//                       Costumers
//                     </div>
//                     <div className="flex flex-row items-center justify-between">
//                       <div className="text-lg font-medium">0</div>
//                       <div className="text-sm font-light text-lime-500 ml-2">
//                         +0.00%
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col  justify-center   text-secondary">
//                     <div className="text-lg  tracking-tight leading-none text-slate-400">
//                       Active
//                     </div>
//                     <div className="flex flex-row items-center justify-between">
//                       <div className="text-lg font-medium">0</div>
//                       <div className="text-sm font-light text-lime-500 ml-2">
//                         +0.00%
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* six card */}
//           <div className="lg:col-span-1 sm:col-span-3 w-auto h-auto bg-white p-6 shadow rounded-xl">
//            right
//           </div>
//           {/* siven card */}
//           <div className=" lg:col-span-2 sm:col-span-3 w-auto h-auto bg-white p-6 shadow rounded-xl">
//            left
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
