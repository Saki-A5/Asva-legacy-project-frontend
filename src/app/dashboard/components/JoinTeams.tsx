const JoinTeams = () => {
    const teams = [
        {
            name: "Software Team",
            desc: "Build ASVA digital platforms"
        },
        {
            name: "Hardware Team",
            desc: "Work on physical systems & devices"
        },
        {   
            name: "Creative Team",
            desc: "Design, branding, media"
        },
        {
            name: "Media & PR",
            desc: "Communications and outreach"
        }
    ]; 
    
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="text-xl font-bold text-gray-900">Join a Team</h2>
                <p className="text-sm text-gray-500">Pick a department you want to contribute to</p>
            </div>  
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {teams.map((t) => ( 
                    <div key={t.name} className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-green-300 transition">    
                        <h3 className="font-semibold text-gray-900">{t.name}</h3>   
                        <p className="text-sm text-gray-500 mt-1">{t.desc}</p>

                        <button className="mt-4 text-sm bg-green-500 text-white px-4 py-2 rounded-xl">      
                            Join
                        </button>
                    </div>      
                ))}
            </div>
        </div>
    );
}

export default JoinTeams;