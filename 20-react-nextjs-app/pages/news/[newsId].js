import { useRouter } from "next/router";

//our-domain.com/news/news-item

function DetailPage() {
  const router = useRouter();
  const newsIdUrl = router.query.newsId;
  //send request to the backend API
  //to fetch the news item with newsId
  console.log("URL : ", newsIdUrl);

  return (
    <div>
      <h2>Detail Page</h2>
    </div>
  );
}

export default DetailPage;
