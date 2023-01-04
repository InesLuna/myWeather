//@ts-nocheck
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

interface NavBarProps {
    setLocation: (value: string) => void,
    handleClick: (e: any) => void;
}
export const NavBar = (props: NavBarProps) => {
    const { setLocation, handleClick } = props;
  

    return (
        <div className='flex justify-between items-center flex-wrap p-5 border-b border-gray-200'>
            <h1 className="text-lg font-black text-gray-900  mb-4 md:mb-0">My<span className="text-yellow-500">W</span><span className="text-red-400">e</span><span className="text-teal-600">a</span>ther</h1>
            <div className="flex flex-nowrap">
                <div className="w-10 min-h-full flex items-center justify-center bg-slate-300 cursor-pointer border border-slate-300 focus:border-teal-600 focus:ring-teal-600 focus:ring-1" onClick={(e) => handleClick(e)}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} size='sm' flip="horizontal" color="white"/>
                </div>
                <input 
                    className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-teal-600 focus:ring-teal-600 focus:ring-1 sm:text-sm" 
                    placeholder="Search your city..." 
                    type="text" 
                    name="search"
                    onChange={(e) => {
                        setLocation(e.currentTarget.value)
                    }}
                />
            </div>
        </div>
    );
};
