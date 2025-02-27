import { Fragment } from "react";
import Button from "../components/elements/button";
import { getmember } from "../services/member.service";

const ListMember = () => {

  const token = localStorage.getItem("token");

    const members = [];

    const params = {
      'page' : 1,
      'search': ""
  };

  const headers = {
     Authorization: `Bearer ${token}`
  };

  console.log(headers);

  getmember(`Bearer ${token}`, (status, res) => {
      console.log(res);
  } );

    const logoutHandle = () => {
        window.location.href="/login";
    }

    return (
        <Fragment>
          <div className="flex justify-end h-20 bg-blue-200 text-white items-center py-2">
            {/* {email} */}
            <Button className="ml-5 bg-black" onClick={logoutHandle}>Logout</Button>
          </div>
          <div className="flex justify-center bg-slate-100">
            <ul role="list" className="divide-y divide-gray-100 w-full">
      {/* {members.map((member) => (
        <li key={member.id} className="flex justify-between gap-x-6 py-5 border px-5">
          <div className="flex min-w-0 gap-x-4">
            <img alt="" src="/images/member-1.jpg" className="h-12 w-12 flex-none rounded-full bg-gray-50" />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{member.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-700">{member.email}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-700">{member.jabatan}</p>
              <p className="text-blue-700">detail</p>
            </div>
      
          </div>
        </li>
        
      ))} */}
    </ul>
        </div>
        </Fragment>
    );

};

export default ListMember;