import { BsSearch } from "react-icons/bs";
import { HiAdjustments } from "react-icons/hi";

const Seacrh = () => {
    return (
        <div>
            <div className="flex items-center rounded-md mt-6 px-4 pl-3 py-2 bg-cool-grey">
                <BsSearch className="text-grey-400 w-5 h-5 absolute ml-3 pointer-events-none" />
                <input type={"search"} className="pr-3 pl-10 py-2 w-full bg-transparent focus:outline-none" placeholder="Search or filter results" />
                <span className=" flex items-center rounded-md justify-center w-10 h-10 text-purple-light hover:bg-purple-lighter hover:cursor-pointer">
                    <HiAdjustments className="w-6 h-6" />
                </span>
            </div>
        </div>

    )
}

export default Seacrh



{/* <div className="py-2 pb-10 px-2 bg-grey-lightest">
<input type="text" className="w-full px-2 py-2 text-sm" placeholder="Search or start new chat" />
</div> */}