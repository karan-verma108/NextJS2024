const page = ({ params }: { params: { productId: number } }) => {
    return (
        <>
            <h1>Selected Product</h1>
            <h3>Product id : {params.productId}</h3>
        </>

    )
}

export default page;