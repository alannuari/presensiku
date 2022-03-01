import { useState } from 'react';
import IzinCuti from './IzinCuti';
import Lembur from './Lembur';
import { useRouter } from 'next/router';

const AktivitasBulanan = () => {
    const [isLembur, setIsLembur] = useState(true);
    const [isIzinCuti, setIsIzinCuti] = useState(false);

    const router = useRouter();

    const handleClick = () => {
        setIsLembur(!isLembur);
        setIsIzinCuti(!isIzinCuti);
    };

    return (
        <div className="py-2">
            <div className="mb-4">
                <h1 className="font-bold text-lg mb-1">Aktivitas Bulanan</h1>

                <a onClick={handleClick} className={`bg-white text-sm inline-block px-3 py-1 border-2 rounded-full mr-2 cursor-pointer ${isLembur ? 'border-green-400' : ''}`}>
                    Lembur
                </a>
                <a onClick={handleClick} className={`bg-white text-sm inline-block px-3 py-1 border-2 rounded-full mr-2 cursor-pointer ${isIzinCuti ? 'border-green-400' : ''}`}>
                    Izin dan Cuti
                </a>
            </div>
            {isLembur && <Lembur />}
            {isIzinCuti && <IzinCuti />}
        </div>
    );
};

export default AktivitasBulanan;
