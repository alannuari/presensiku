import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center block bg-green-100 min-h-screen">
            <div className="text-center">
                <h1 className="text-3xl py-2">Ooops...</h1>
                <h2 className="text-xl py-2">Halaman tidak ditemukan.</h2>
                <p className="py-2 text-gray-400">
                    Kembali ke
                    <Link href="/">
                        <a className="text-blue-400"> Halaman utama</a>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default NotFound;
