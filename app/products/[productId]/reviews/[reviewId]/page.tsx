import { notFound } from 'next/navigation';

export default function ReviewId({ params }: { params: { productId: number, reviewId: number } }) {
    if (params.reviewId > 1000) {
        notFound();
    }
    return (
        <h1>You are seeing review no. {params.reviewId}  for product id : {params.productId} </h1>
    )
}