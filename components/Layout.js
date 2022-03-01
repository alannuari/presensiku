import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Loading from './Loading';

const Layout = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    return (
        <div className="max-w-2xl mx-auto bg-slate-100">
            {isLoading && <Loading />}
            {!isLoading && (
                <div>
                    {children} <Navbar />
                </div>
            )}
        </div>
    );
};

export default Layout;
