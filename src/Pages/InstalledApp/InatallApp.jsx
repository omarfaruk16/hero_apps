import React from 'react';
import InstalledApps from '../../Components/InstalledApp/InstalledApps';

const InatallApp = () => {
    return (
        <>
        <div className='p-2 md:p-20 text-center bg-[#E5E7EB]'>
            <h1 className="text-3xl font-bold">Your Installed Apps</h1>
            <p className='text-[#627382] text-[20px] pt-2'>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <InstalledApps></InstalledApps>
        </>
    );
};

export default InatallApp;