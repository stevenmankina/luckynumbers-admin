import { useEditor } from "@tiptap/react";
import axios from "axios";
import { MagnifyingGlass } from "phosphor-react";
import React, { useEffect, useState } from "react";
import TextEditor from "../components/TextEditor";
import Title from "../components/Title";
import { BASE_URL } from "../util/config";

const Marketing = () => {
  const [text, setText] = useState("");

  const [subject, setSubject] = useState("");

  const [userList, setUserList] = useState(false);

  const [userEmails, setUserEmails] = useState([]);

  const [userEmail, setUserEmail] = useState("");

  const searchUsers = async () => {
    // let querry = "Pranit";
    // let querry = e.target.value;

    if (userEmail.length >= 3) {
      let url = `${BASE_URL}/player`;

      try {
        let res = await axios.get(url);
        if (res.status === 200) {
          setUserEmails(res.data.data);
        } else {
          console.log(res.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  // useEffect(() => {
  //   console.log(text);
  // }, [text])
  

  return (
    <>
      <div className="p-2 md:p-6 text-left">
        <Title title={"Marketing Emails"} />

        <h2 className="text-2xl font-bold text-left p-6 text-primary-500">
          Send Email
        </h2>

        <div className="flex px-6">
          <div className=" md:w-5/12 relative"  >
            <p className="py-2 text-2xl text-left">Users</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter name or email"
                onKeyUp={searchUsers}
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className="rounded p-1 w-6/12 outline-none border-2 mr-1"
                onClick={() => setUserList(true)}
                
              />
              <div className="px-3 rounded bg-primary-500">
                <MagnifyingGlass
                  className="p-1 text-white bg-primary-500"
                  size={32}
                />
              </div>
            </div>

            <div
              className={`p-2 overflow-y-scroll max-h-[40vh] z-40  mt-2 absolute ${
                userList ? "" : "hidden"
              } bg-purple-50`}
            >
              <p onClick={()=>setUserList(false)} className="text-right cursor-pointer p-2">X</p>
              {userEmails &&
                userEmails.map((user) => (
                  <div
                    onClick={() => {setUserEmail(user.email); setUserList(false)}}
                    key={user._id}
                    className="p-1 border m-1 z-50 cursor-pointer border-black rounded"
                  >
                    <p>{user.firstname}</p>
                    <p>{user.email}</p>
                  </div>
                ))}

              {/* <div className="p-1 border cursor-pointer border-black rounded">
                <p>User</p>
                <p>email</p>
              </div> */}
            </div>
          </div>
          <div className=" md:w-5/12">
            <p className="py-2 text-2xl text-left">Sponsors</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter name or email"
                className="rounded w-6/12 p-1 outline-none border-2 mr-1"
              />
              <div className="px-3 rounded bg-primary-500">
                <MagnifyingGlass
                  className="p-1 text-white bg-primary-500"
                  size={32}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-left w-full p-6">
          <p className="py-2 text-xl text-left">Subject:</p>
          <input
            placeholder="Enter Your Subject"
            className="rounded p-1 w-full outline-none border-2 mr-1"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="float-left w-full px-6">
          <TextEditor text={text} setText={setText} className="outline-none" />
        </div>
      </div>
    </>
  );
};

export default Marketing;
