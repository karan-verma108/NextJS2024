export default function productReview({ params }: { params: { productId: number } }) {
    return (
        <>
            <h1>Here you have all the reviews of product id : {params.productId}</h1>
        </>
    )
}