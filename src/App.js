import React, {useState} from 'react';
import './App.css';

import Logo from '../src/assets/logo.png';
import Arrow from '../src/assets/control.png';

import Dashboard from '../src/assets/Chart_fill.png';
import Inbox from '../src/assets/Chat.png';
import Accounts from '../src/assets/User.png';
import Schedule from '../src/assets/Calendar.png';
import Search from '../src/assets/Search.png';
import Analytics from '../src/assets/Chart.png';
import Folder from '../src/assets/Folder.png';
import Setting from '../src/assets/Setting.png';

function App() {

    const [open, setOpen] = useState(false);

    return (
        <div className="flex">
            <div className={
                `${open ? "w-64" : "w-20 "}
                    bg-dark-purple h-screen p-5  pt-8 relative duration-300`
            }
                 onClick={() => setOpen(!open)}>
                <div className="flex gap-x-4 items-center">
                    <img
                        src={Logo}
                        className={`cursor-pointer duration-500 ${
                            open && "rotate-[360deg]"
                        }`}
                    />
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${
                            !open && "scale-0"
                        }`}
                    >
                        Designer
                    </h1>
                </div>
                <ul className="pt-6">
                    {/*
                        Dashboard and Inbox
                    */}
                    <li
                        className={
                            'flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2'
                        }
                    >
                        <img src={Dashboard}/>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Dashboard
                        </span>
                    </li>
                    <li
                        className={
                            'flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2'
                        }
                    >
                        <img src={Inbox}/>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Inbox
                        </span>
                    </li>
                    {/*
                        Accounts, Schedule, Search and Analytics
                    */}
                    <li
                        className={
                            'flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-9'
                        }
                    >
                        <img src={Accounts}/>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Accounts
                        </span>
                    </li>
                    <li
                        className={
                            'flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2'
                        }
                    >
                        <img src={Schedule}/>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Schedule
                        </span>
                    </li>
                    <li
                        className={
                            'flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2'
                        }
                    >
                        <img src={Search}/>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Search
                        </span>
                    </li>
                    <li
                        className={
                            'flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2'
                        }
                    >
                        <img src={Analytics}/>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Analytics
                        </span>
                    </li>
                    {/*
                        Files and Settings
                    */}
                    <li
                        className={
                            'flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-9'
                        }
                    >
                        <img src={Folder}/>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Files
                        </span>
                    </li>
                    <li
                        className={
                            'flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 mt-2'
                        }
                    >
                        <img src={Setting}/>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            Settings
                        </span>
                    </li>
                </ul>
            </div>
            {
                // blur effect
            }
            <div className={`w-full h-full ${open ? "blur-sm" : "blur-none"}`}>
                {
                    /*
                    * code
                    * */
                }
            </div>
        </div>
    );
}

export default App;
