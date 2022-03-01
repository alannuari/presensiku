import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import profilepic from '../assets/ALAN.jpg';

const HeaderHome = () => {
    return (
        <div className="bg-color-primary sm:p-4 p-2">
            <div className="text-right">
                <button className="px-1 mb-4 text-xl text-white">
                    <FontAwesomeIcon icon={faBell} />
                </button>
            </div>
            <div>
                <h2 className="flex justify-between text-white text-sm">
                    <span>PT Semua Kopi Indonesia</span>
                    <span>01.58</span>
                </h2>
                <div className="bg-white px-3 py-1 inline-flex w-full rounded-xl">
                    <div className="border-2 border-slate-100 w-20 h-20 rounded-full">
                        <Image src={profilepic} alt="Foto profile" className="w-full rounded-full m-0" />
                    </div>
                    <div className="flex items-center">
                        <div className="p-3">
                            <p className="text-sm">Alan Nuari</p>
                            <p className="text-sm text-slate-300">LAIN-LAIN</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderHome;
