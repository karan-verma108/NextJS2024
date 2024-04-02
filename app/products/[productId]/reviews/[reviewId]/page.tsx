export default function reviewId({ params }: { params: { productId: number, reviewId: number } }) {
    return (
        <>
            <h1>You are seeing review no. {params.reviewId}  for product id : {params.productId} </h1>
        </>
    )
}