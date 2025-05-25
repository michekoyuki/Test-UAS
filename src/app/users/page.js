import UserCard from "@/components/user-card";
import { IconLogout, IconLogout2, IconUser, IconUsersGroup, IconUsersPlus,IconPlus } from "@tabler/icons-react";
import { usersData } from "../../../mock/user-data";
export default function Users() {
  return (
    <section id="container" className="flex h-screen justify-center">
      <section id="navigation" className="bg-white w-[15%] border-r border-gray-300 p-4 ">
        <h1 className="text-[30px] mb-5  font-sans  font-bold text-center">Connect</h1>
        <div className="nav-buttons flex flex-col items-center gap-4 p-2 w-full mb-2 font-bold text-[18px]">
          <button className="rounded-[10px] flex items-center gap-2 py-2 px-3 bg-black text-white border border-gray-300 w-[90%] cursor-pointer">
            <IconUser/> User
          </button>
          <button className=" flex items-center gap-2 py-2 px-3 w-[90%]">
            <IconUsersPlus /> Hak Akses
          </button>
          <button className=" flex items-center gap-2 py-2 px-3  w-[90%] ">
            <IconLogout2 /> Logout
          </button>
        </div>
      </section>
      <section id="content" className="bg-white w-[85%] p-5">
        <input
          placeholder="Cari user"
          className="flex w-[98%] h-[5vh] mb-5 p-4 text-[14,5px] border border-gray-300 rounded-[7px]"
        />
        {usersData.map((User, index) => (
          <UserCard 
          key={index}
          name={User.name}
          email={User.email}
          roles={User.roles}
          status={User.status}  
          />
       ))} 
      </section>
      <button className="absolute bottom-10 right-6 bg-gray-300 hover:bg-gray-100 text-xl w-15 h-10 rounded flex items-center justify-center ">
        <IconPlus />
      </button>
    </section>
  );
}