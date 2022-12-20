export const DataView = ({ data }) => {
    // console.log(data)
    const RenderDataView = () => {

        if (data) {

            return (
                <tr className="border border-slate-300">
                    <td className="border border-zinc-900">{data.success}</td>
                    <td className="border border-zinc-900">{data.deck_id}</td>
                    <td className="border border-zinc-900">{data.remaining}</td>
                    <td className="border border-zinc-900">{data.shuffled}</td>
                </tr>
            )

        }
        return (
            <span>Sem dados</span>
        )

    }
    return (
        <div className="flex w-full h h-full mt-8">
            <table className="bg-gray-900 table-auto w-full border-collapse border border-slate-400">
                <thead className="bg-gray-700">
                    <tr>
                        <th className="border border-slate-300">Sucess</th>
                        <th className="border border-slate-300">deck_id</th>
                        <th className="border border-slate-300">remaining</th>
                        <th className="border border-slate-300">shuffled</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-300 text-black">
                    <RenderDataView />
                </tbody>
            </table>

        </div>
    )
}