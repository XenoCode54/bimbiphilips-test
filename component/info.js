export default function Info() {
    return (
        <div>
            <div className="flex flex-col items-center md:flex-row pl-10 md:pl-40 pt-16">
                <div className="rounded-full mb-2 md:mb-0 w-20 h-20 p-2 flex items-center justify-center bg-white">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src="/logo.png" className="w-18 h-18 rounded-full" alt="image" />
                </div>
                <div className="ml-4 text-center border border-white">
                    <h1 className="head-t font-bold font-mono tracking-wide px-3">HILTON HOTEL</h1>
                    <h2 className="bg-white text-black text-xl pb-1">POWERED BY TRAVEL JINNI</h2>
                </div>
            </div>
            <div className="div-w ml-40 text-center border-white border mt-2 pt-8 px-4 bg-gray-400 bg-opacity-10 blur-filter rounded-md">
                <h1 className="text-5xl font-serif font-bold pb-5 px-4">Your Trip Awaits You!</h1>
                <p className="text-sm pb-5">
                    We have taken some time to help plan your trip to make it a memmorable one.
                    Access your calender for even more things you can do on your trip.
                </p>
                <button className="bg-yellow-300 w-full border-black border-2 text-black font-bold py-2 mb-5">
                    ACCESS CALENDAR
                </button>
            </div>
        </div>
    );
}
