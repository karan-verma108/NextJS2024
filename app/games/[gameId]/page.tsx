export const metadata = {
    title : `game id :`
}

export default function Games({ params }: { params: { gameId: string } }) {
    return (
        <h1>this is games page of id {params.gameId}</h1>
    )
}