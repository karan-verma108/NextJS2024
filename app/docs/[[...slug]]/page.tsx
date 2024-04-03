export default function DynamicSlugs({ params }: { params: { slug: string[] } }) {
    if (params.slug?.length === 3) {
        return <h1>You are viewing docs for feature {params.slug[0]} of concept {params.slug[1]} with the example of {params.slug[2]} </h1>
    } else if (params.slug?.length === 2) {
        return <h1>You are viewing docs for feature {params.slug[0]} of concept {params.slug[1]} </h1>
    } else if (params.slug?.length === 1) {
        return <h1>You are viewing docs for feature {params.slug[0]}</h1>
    }
    return <h1>This the docs first page</h1>
}