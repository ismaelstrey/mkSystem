const FormLogin = () => {
    return (
        <form className="flex bg-purple-200 w-full flex-col items-center content-center">
            <label className=" flex flex-col w-3/4 ">
                <span className=" font-medium text-slate-700 text-5xl text-center p-5">Pesquisa</span>
                <input type="text" className="w-full rounded h-20" />
            </label>
        </form>
    )
}

export { FormLogin }