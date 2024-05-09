import Review from "../Review";
import ReviewForm from "../ReviewForm";

function Reviews(reviews: any) {
  return (
    <section className="flex justify-start mt-5">
      <div className="flex items-center flex-col justify-start text-left w-full space-y-3">
        <ReviewForm />

        <div className="flex justify-start w-full sm:pt-2 pb-2">
          <span className="font font-semibold text-xs text-left ml-0">
            {
              reviews.reviews.filter((obj: any) => obj.slug === reviews.slug)
                .length
            }{" "}
            reviews
          </span>
        </div>
        <section className="w-full">
          {reviews.reviews
            .filter((obj: any) => obj.slug === reviews.slug)
            .sort((a: any, b: any) => b.createdAt - a.createdAt)
            .map((review: any) => (
              <Review key={review.id} review={review} />
            ))}
        </section>
      </div>
    </section>
  );
}

export default Reviews;
