export default function adminLogin(){
    return(
        <>
            <div className="h-screen flex justify-center items-center bg-[#F5EFFF]">
                <div className="w-[500px] h-[550px] p-10 flex flex-col gap-[20px] justify-center bg-white bg-opacity-30 backdrop-blur-md rounded-[10px] shadow-lg border border-[#E5D9F2]">
                    <div className="flex flex-col gap-3">
                        <label className="text-[2.6rem] text-[#6d3fe1] text-center">Admin-Cognitio</label>
                        <label className="text-[#6d3fe1] text-[1.7rem]">Sign-in</label>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[#686D76]">Username</label>
                        <input name="usernameInput" 
                        type="text"
                        className="w-full h-[42px] p-[10px] rounded-[8px] bg-white bg-opacity-30 text-[#686D76] border-[1px] border-[#E5D9F2] focus:border-[#E5D9F2] focus:outline-none focus:border-[2px] placeholder-[#686D76]"
                        placeholder="Username here!"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[#686D76]">Password</label>
                        <input name="usernameInput" 
                        type="password"
                        className="w-full h-[42px] p-[10px] rounded-[8px] bg-white bg-opacity-30 text-[#686D76] border-[1px] border-[#E5D9F2] focus:border-[#E5D9F2] focus:outline-none focus:border-[2px] placeholder-[#686D76]"
                        placeholder="Your password"/>
                    </div>
                    <div className="flex">
                        <button
                        type="submit"
                        className="w-full h-[45px] rounded-[8px] bg-[#6d3fe1] bg-opacity-80 hover:bg-opacity-100 mt-7">Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}