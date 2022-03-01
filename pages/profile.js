import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import profilepic from '../assets/ALAN.jpg';

const Profile = () => {
    return (
        <div>
            <div className="bg-color-primary h-20 text-right">
                <button className="px-5 py-4 text-xl text-white">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
            <div className="relative bottom-10 pb-4">
                <div className="w-full mb-4  px-4">
                    <div className="border-2 border-slate-100 w-20 h-20 rounded-full mb-2">
                        <Image src={profilepic} alt="Foto profile" className="w-full rounded-full m-0" />
                    </div>
                    <p className="text-xs">Alan Nuari</p>
                    <p className="text-xs">LAIN-LAIN</p>
                    <p className="text-xs">PT Semua Kopi Indonesia</p>
                </div>
                <div className="px-2 sm:px-4">
                    <div className="bg-white mb-4 px-4 py-5 w-full rounded-xl shadow">
                        <div className="py-1">
                            <h2 className="text-slate-300 text-sm">NIK</h2>
                            <p className="text-xs">0123456789012345</p>
                        </div>
                        <div className="py-1">
                            <h2 className="text-slate-300 text-sm">Email</h2>
                            <p className="text-xs">alan@nuari.com</p>
                        </div>
                        <div className="py-1">
                            <h2 className="text-slate-300 text-sm">No. Telepon</h2>
                            <p className="text-xs">+6281234567890</p>
                        </div>
                        <div className="py-1">
                            <h2 className="text-slate-300 text-sm">Alamat</h2>
                            <p className="text-xs">Jln. Kenangan No.99, Indonesia</p>
                        </div>
                    </div>
                    <div className="bg-white mb-4 px-4 py-5 w-full rounded-xl shadow">
                        <h1 className="text-slate-500 font-bold mb-2 text-sm">Tempat Presensi</h1>
                        <h2 className="font-bold text-xs">RedWhite Coffe</h2>
                        <p className="text-xs">Jl. Teuku Umar Barat No.327, Padangsambian Klod, Kec. Denpasar Bar., Kota Denpasar, Bali 80119, Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
