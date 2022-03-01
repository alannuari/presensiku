const Statistik = () => {
    return (
        <div className="py-2">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <h1 className="font-bold text-lg">Statistik</h1>
                    <p className="text-xs text-gray-300">Yuk! Lihat statistik kegiatanmu</p>
                </div>
                <span className="text-teal-600 font-bold text-sm">Lihat Detail</span>
            </div>
            <div className="bg-white rounded-xl p-2 shadow">
                <div className="">
                    <div className="grid grid-cols-2 my-4">
                        <div className="flex justify-between px-3 py-1 border-r">
                            <h1 className="flex items-center text-gray-500 text-sm">Hadir</h1>
                            <p className="ml-auto text-2xl ml-auto font-extrabold">12</p>
                        </div>
                        <div className="flex justify-between px-3 py-1 border-l">
                            <h1 className="flex items-center text-gray-500 text-sm">Tidak Hadir</h1>
                            <p className="ml-auto text-2xl ml-auto font-extrabold">9</p>
                        </div>
                        <div className="flex justify-between px-3 py-1 border-r">
                            <h1 className="flex items-center text-gray-500 text-sm">Terlambat</h1>
                            <p className="ml-auto text-2xl ml-auto font-extrabold">0</p>
                        </div>
                        <div className="flex justify-between px-3 py-1 border-l">
                            <h1 className="flex items-center text-gray-500 text-sm">Izin</h1>
                            <p className="ml-auto text-2xl ml-auto font-extrabold">0</p>
                        </div>
                    </div>
                    <progress max="100" value="60" className="w-full"></progress>
                    <div>
                        <p>
                            <span className="text-gray-300 text-sm">Status</span>
                            <span className="text-gray-300 text-sm mx-8">:</span>
                            <span className="text-orange-400">Kurang Baik</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistik;
